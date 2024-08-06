import React, { useState } from "react";
import { Popup } from "react-popupify";
import { useDispatch } from "react-redux";
import { Loader } from "../utils/Loader";
import { logout } from "../../actions/auth";
import { useNavigate } from "react-router-dom";

export const LogoutPopup = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  //the loader doesn't even show tbh hh
  const onLogout = async () => {
    setLoading(true);
    await dispatch(logout());
    navigate("/");
  };


  // console.log(id);

  return (
    <Popup
      popupId="logoutPopup"
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
            Are you sure you want to log out from (E)ventech ?
          </p>
          <Button text={"Log out"} onClick={onLogout}></Button>
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

export default LogoutPopup;
