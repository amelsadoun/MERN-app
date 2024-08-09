import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileMenu from "./profileMenu";
export default function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const clubName = useSelector((state) => state.auth.club?.name);
  // const club = useSelector((state) => state.auth.club);


  // console.log(clubName);

  // console.log("authenticated: " + isAuthenticated);

  return (
    <div className="mb-10 z-10 bg-gradient-to-bl shadow-md from-green-500 to-green-100 self-center h-28 w-[calc(100vw+40px)]  flex flex-row align-center justify-between px-24 rounded-b-[500px]">
      <h1 className="self-center text-4xl font-bold text-green-950">
        (E)VENTECH
      </h1>
      <div className="self-center flex flex-row gap-5">
        <Button buttonText={"Events"} link="/" />
        {!isAuthenticated && <Button buttonText={"Log in"} link="/login" />}
        {isAuthenticated && (
          <>
            <Button buttonText={"+ event"} link="/createEvent" />
            <span className="self-center text-white">{clubName}</span>
            <ProfileMenu />
          </>
        )}
      </div>
    </div>
  );
}

function Button({ buttonText, link }) {
  return (
    <Link
      to={link}
      className="relative items-center self-center justify-start inline-block px-7 py-3 overflow-hidden text-xl rounded-full group"
    >
      <span className="translate-x-0 absolute bg-white opacity-[3%]"></span>
      <span className="absolute top-0 rounded-r-full left-0 w-[200px] h-48 -mt-1 transition-all duration-500 ease-in-out -translate-x-48 bg-white opacity-100 group-hover:translate-x-0"></span>
      <span className="relative w-full text-white transition-colors duration-200 ease-in-out group-hover:text-green-900">
        {buttonText}
      </span>
      <span className="absolute inset-0 border-[1px] border-white rounded-full"></span>
    </Link>
  );
}
