import { useDispatch, useSelector } from "react-redux";
import EventCard from "./eventCard";
import { useEffect, useState } from "react";
import { Loader } from "../utils/Loader";
import { getEvents } from "../../actions/events";
import SearchBar from "../search&filters/searchBar";

export default function Events() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const filters = useSelector((state) => state.filters.filters);
  const searchQuery = useSelector((state) => state.filters.searchQuery);
  const events = useSelector((state) => state.events.events);
  const { currentPage, totalPages } = useSelector(
    (state) => state.events?.pagination || {}
  );

  // console.log({ currentPage, totalPages })

  const dispatch = useDispatch();

  console.log(filters);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      await dispatch(getEvents(filters, searchQuery, page));
      setLoading(false);
    };

    fetchEvents();
  }, [dispatch, filters, searchQuery, page]);

  return (
    <div className="flex flex-col desktop:mx-32 mx-5 gap-5 mb-10">
      <SearchBar />
      {loading ? (
        <Loader text={"Loading events..."} />
      ) : (
        <>
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
          <div className="flex justify-center mt-5">
            <button
              disabled={currentPage == 1}
              onClick={() => setPage((prev) => prev - 1)}
              className="px-4 py-2 text-xl font-semibold bg-slate-100 text-black rounded-lg disabled:opacity-50"
            >
              {"<"}
            </button>
            <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              disabled={currentPage == totalPages}
              onClick={() => setPage((prev) => prev + 1)}
              className="px-4 py-2 text-xl font-semibold bg-slate-100 text-black rounded-lg disabled:opacity-50"
            >
              {">"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
