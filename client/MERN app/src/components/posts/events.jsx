import { useDispatch, useSelector } from "react-redux";
import EventCard from "./eventCard";
import { useEffect, useState } from "react";
import { Loader } from "../utils/Loader";
import { getEvents } from "../../actions/events";
import SearchBar from "../search&filters/searchBar";
import { setFilters, setSearchQuery } from "../../actions/filters";

export default function Events() {
  const [loading, setLoading] = useState(true);
  const filters = useSelector((state) => state.filters.filters);
  const searchQuery = useSelector((state) => state.filters.searchQuery);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      await dispatch(getEvents());
      setLoading(false);
    };

    fetchEvents();
  }, [dispatch]);

  const events = useSelector((state) => state.events);
  console.log(events);

  // Filter events based on the selected filters and search query
  const filteredEvents = events && Array.isArray(events) ? events.filter((event) => {
    const matchesSearchQuery = event.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesField =
      filters.field.length === 0 || filters.field.includes(event.field);

    const matchesType =
      filters.type.length === 0 || filters.type.includes(event.eventType);

    const matchesTags =
      filters.tags.length === 0 ||
      filters.tags.some((tag) => event.socialLinks.includes(tag));

    const matchesDateFrom =
      !filters.dateFrom ||
      new Date(event.startDate) >= new Date(filters.dateFrom);

    const matchesDateTo =
      !filters.dateTo || new Date(event.startDate) <= new Date(filters.dateTo);

    // Return true if all conditions match
    return (
      matchesSearchQuery &&
      matchesField &&
      matchesType &&
      matchesTags &&
      matchesDateFrom &&
      matchesDateTo
    );
  }):[];

  if (loading) {
    return <Loader text={"Loading events..."} />;
  }

  return (
    <div className="flex flex-col mx-40 gap-5 mb-10">
      <SearchBar
        setSearchQuery={(query) => dispatch(setSearchQuery(query))}
        setFilters={(filters) => dispatch(setFilters(filters))}
      />
      {filteredEvents.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
}
