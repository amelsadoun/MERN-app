import { useDispatch, useSelector } from "react-redux";
import EventCard from "./eventCard";
import { useState, useEffect } from "react";
import { Loader } from "../Loader";
import { getEvents } from "../../actions/events";

export default function Events() {
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col mx-10 gap-5">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
}
