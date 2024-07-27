import { useSelector } from "react-redux";
import EventCard from "./eventCard";
import { useState, useEffect } from "react";
import { Loader } from "../Loader";

export default function Events() {
  const [loading, setLoading] = useState(true);
  const events = useSelector((state) => state.events);

  useEffect(() => {
    if (events.length > 0) {
      setLoading(false);
    }
  }, [events]);

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
