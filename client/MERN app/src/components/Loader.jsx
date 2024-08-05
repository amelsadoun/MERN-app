import { Riple } from "react-loading-indicators";

export const Loader = ({ text }) => {
  return (
    <div className=" flex-col text-center absolute self-center bg-green-900 bg-opacity-20 p-5 rounded-xl top-[40%] flex items-center justify-center z-10">
      <Riple color={"white"} />
      <h1 className="text-white">{text}</h1>
    </div>
  );
};
