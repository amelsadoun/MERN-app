import { useSelector } from "react-redux";
import Event from "./event";

export default function Events() {
  const events = useSelector((state) => state.events);
  console.log(events);

  return (
    <div className="flex flex-col mx-10 gap-5">
      {events.map((event, index) => <Event index={index} event={event} />)}
    </div>
  );
}
