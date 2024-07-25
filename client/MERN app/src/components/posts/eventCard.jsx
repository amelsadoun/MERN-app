import { useNavigate } from "react-router-dom";

export default function EventCard({ event, index }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${event._id}`);
  };

  return (
    <>
      <div
        onClick={handleClick}
        key={index}
        className=" cursor-pointer flex  h-[20vh] flex-row gap-5 p-5 w-full bg-white rounded-2xl drop-shadow shadow-lg "
      >
        <img
          src={event.imageURL}
          alt={event.name}
          className="w-[19vh] overflow-hidden object-cover mt-2"
        />

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold hover:underline">
            {event.name}
          </h1>
          <p className="text-lg font-regular">
            {event.description == ""
              ? "No description provided"
              : event.description}
          </p>
        </div>
      </div>
    </>
  );
}
