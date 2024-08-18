import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEvent } from "../../actions/events";
import ProfileCard from "./profileCard";
import { Loader } from "../utils/Loader";
import { formatDate } from "../utils/formatDate";

export default function EventInfo() {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      await dispatch(getEvent(id)); //it says await has no effect but it's LYING
      setLoading(false);
    };

    fetchEvent();
  }, [dispatch, id]);

  const event = useSelector((state) => state.events);

  const startDate = formatDate(event.startDate);
  const endDate = formatDate(event.endDate);

  console.log(startDate);
  
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="mx-10 mb-10 bg-gradient-to-bl from-green-100 overflow-hidden to-slate-50 rounded-3xl shadow-lg">
      <img
        src={event.imageURL}
        className="w-full desktop:h-96 tablet:h-72 object-cover"
        alt="image"
      />
      <div className="flex flex-row justify-around">
        <ProfileCard clubId={event.clubId} />
        <div className="flex flex-col gap-5 justify-between p-6 flex-[70%] align-middle ">
          <h1 className="text-4xl font-bold">{event.name}</h1>
          <p className="text-2xl">{event.description}</p>
          <p className="text-xl text-green-900 font-semibold">
            {event.field} - {event.eventType}
          </p>
          {event.socialLinks?.map((tag, index) => (
            <>
              {index != 0 && " - "}
              {tag}
            </>
          ))}
          <p className="text-lg">Start date: {startDate}</p>
          {event.endDate && (
            <p className="text-lg">End date: {endDate}</p>
          )}
          <p className="text-lg">Location: {event.location}</p>
          <a
            className="text-lg underline text-green-800"
            href={event.registrationLink}
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
