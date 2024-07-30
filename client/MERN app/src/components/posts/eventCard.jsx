import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import edit_icon from "../../assets/edit.svg";
import delete_icon from "../../assets/delete.svg";

export default function EventCard({ event, index }) {
  const navigate = useNavigate();

  //getting the id of the (logged in) user
  const clubId = useSelector((state) => state.auth.club?.id);

  //handle when card clicked, it takes to details page
  const handleClick = () => {
    navigate(`/${event._id}`);
  };

  //check if the event is the users' so they can modify and/or delete
  const isIdMatching = event.clubId == clubId;

  return (
    <>
      <div
        onClick={handleClick}
        key={index}
        className=" cursor-pointer flex  h-[20vh] flex-row justify-between p-5 w-full bg-white rounded-2xl drop-shadow shadow-lg hover:bg-gradient-to-bl from-green-100 to-slate-100 group"
      >
        <div className="flex flex-row gap-5 ">
          <img
            src={event.imageURL}
            alt={event.name}
            className="w-[19vh] overflow-hidden object-cover mt-2"
          />

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold group-hover:underline">
              {event.name}
            </h1>
            <p className="text-lg font-regular">
              {event.description == ""
                ? "No description provided"
                : event.description}
            </p>
          </div>
        </div>
        {isIdMatching && (
          <div className="self-center flex gap-5">
            <img
              src={edit_icon}
              className="h-6 transition-transform duration-300 hover:scale-125"
              alt="edit"
            />
            <img
              src={delete_icon}
              className="h-6 transition-transform duration-300 hover:scale-125"
              alt="delete"
            />
          </div>
        )}
      </div>
    </>
  );
}
