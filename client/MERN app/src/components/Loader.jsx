import { Riple } from "react-loading-indicators";

export const Loader = () => {
  return (
    <div className="absolute self-center bg-green-900 bg-opacity-20 p-5 rounded-xl top-[40%] flex items-center justify-center z-10">
      <Riple color={"white"} />
    </div>
  );
};
