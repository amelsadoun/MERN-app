import React, { useState } from "react";
import { Popup } from "react-popupify";
import { useDispatch } from "react-redux";
import { Loader } from "../Loader";
import { deleteEvent } from "../../actions/events";

const DeletePopup = ({ id }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  //the loader doesn't even show tbh hh
  const onDeleteEvent = async () => {
    setLoading(true);
    await dispatch(deleteEvent(id));
    window.location.reload(false); //refresh the page to see the updated events list
  };

  // console.log(id);

  return (
    <Popup
      popupId="deletePopup"
      animation="bounce"
      open={false}
      closeOnEscape={true}
      closeOnOutsideClick={true}
      closeButton={true}
    >
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-10 justify-center w-[50vw] align-middle bg-gradient-to-bl from-green-300 to-slate-100 shadow-xl h-fit p-10 rounded-3xl">
          <p className="text-2xl">
            are you sure you want to delete this event? This action is
            irreversible
          </p>
          {/* <button
            onClick={closePopup}
            className="text-xl text-green-900 hover:underline"
          >
            Cancel
          </button> */}
          <Button text={"Delete post"} onClick={onDeleteEvent}></Button>
        </div>
      )}
    </Popup>
  );
};

function Button({ text, onClick }) {
  return (
    <a
      onClick={onClick}
      className=" relative cursor-pointer items-center self-center justify-start inline-block px-7 py-3 overflow-hidden text-xl rounded-full group"
    >
      <span className="absolute opacity-[3%] bg-red translate-x-0"></span>
      <span className="absolute top-0 left-0 w-[300px] h-48 -mt-1 transition-all duration-500 ease-in-out -translate-x-80 opacity-100 group-hover:translate-x-0 rounded-r-full bg-red-700"></span>
      <span className="relative w-full transition-colors duration-200 ease-in-out group-hover:text-white text-red-700">
        {text}
      </span>
      <span
        className={"absolute inset-0 border-[1px] rounded-full border-red-700"}
      ></span>
    </a>
  );
}

export default DeletePopup;
