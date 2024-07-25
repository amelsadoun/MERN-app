import { useSelector } from "react-redux";
import EventCard from "./eventCard";

export default function Events() {
  const events = useSelector((state) => state.events);
  // console.log(events);

  return (
    <div className="flex flex-col mx-10 gap-5">
      {events.map((event, index) => <EventCard key={index} event={event} />)}
    </div>
  );
}
