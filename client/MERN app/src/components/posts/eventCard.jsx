import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import edit_icon from "../../assets/edit.svg";
import delete_icon from "../../assets/delete.svg";
import DeletePopup from "../popups/deletePopup";
import { showPopup } from "react-popupify";
import "react-popupify/dist/bundle.css";
import { useState } from "react";

export default function EventCard({ event, index }) {
  const navigate = useNavigate();
  const [deleteClicked, setDeleteClicked] = useState(false);
  //getting the id of the (logged in) user
  const clubId = useSelector((state) => state.auth.club?.id);
  console.log(event._id);
  //handle when card clicked, it takes to details page
  const handleClick = () => {
    navigate(`/${event._id}`);
  };

  const handleEditClick = () => {
    navigate(`/edit/${event._id}`);
  };

  const handleDeleteClick = () => {
    showPopup("deletePopup", { open: true });
    setDeleteClicked(true);
  };

  //check if the event is the users' so they can modify and/or delete
  const isIdMatching = event.clubId == clubId;

  return (
    <>
      <div
        key={index}
        className=" flex h-[20vh] flex-row justify-between p-5 w-full bg-green-200 bg-opacity-20 rounded-2xl drop-shadow shadow-lg hover:bg-gradient-to-bl from-green-100 to-slate-100"
      >
        <div className="z-10 flex flex-row gap-5">
          <img
            onClick={handleClick}
            src={event.imageURL}
            alt={event.name}
            className="cursor-pointer w-[19vh] overflow-hidden object-cover mt-2"
          />

          <div
            onClick={handleClick}
            className="cursor-pointer flex flex-col gap-2 group"
          >
            <h1 className="text-2xl font-semibold group-hover:underline">
              {event.name}
            </h1>
            <p className="text-lg font-regular">
              {event.description === ""
                ? "No description provided"
                : event.description}
            </p>
          </div>
        </div>
        {isIdMatching && (
          <div className="self-center flex gap-5">
            <img
              src={edit_icon}
              className="z-10 h-6 cursor-pointer transition-transform duration-300 hover:scale-125"
              alt="edit"
              onClick={handleEditClick}
            />
            <img
              src={delete_icon}
              className="h-6 cursor-pointer transition-transform duration-300 hover:scale-125"
              alt="delete"
              onClick={handleDeleteClick}
            />
            {deleteClicked && <DeletePopup id={event._id} />}
          </div>
        )}
      </div>
    </>
  );
}
