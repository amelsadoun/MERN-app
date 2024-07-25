import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEvent } from "../../actions/events";

export default function EventInfo() {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch, id]); //gotta add id else nothing's gonna work hh

  const event = useSelector((state) => state.events);

  return (
    <div className="flex flex-col justify-between align-middle p-6 mx-10 bg-gradient-to-bl from-green-100 to-slate-50 rounded-3xl shadow-lg gap-5">
      <h1 className="text-4xl font-bold">{event.name}</h1>
      <p className="text-2xl">{event.description}</p>
      {event.socialLinks?.map((tag)=>(<>{tag}</>))}
      <p className="text-lg">Start date: {event.startDate}</p>
      {event.endDate && <p className="text-lg">End date: {event.endDate}</p>}

    </div>
  );
}
