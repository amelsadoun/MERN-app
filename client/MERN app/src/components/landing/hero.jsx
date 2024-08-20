import { useNavigate } from "react-router-dom";
import hero_image from "../../assets/hero.svg";

export default function Hero() {
  const navigate = useNavigate();

  const browseToHome = () => {
    navigate("/events");
  };
  return (
    <div className="flex flex-row justify-around align-start items-center flex-wrap tablet:flex-nowrap gap-16 bg-gradient-to-b from-lime-900 to-ocean-800 desktop:px-32 px-10 py-10 desktop:pb-72">
      <div className="flex flex-col gap-10 items-start">
        <h1 className="text-4xl font-bold text-ocean-300">
          Discover the Best Student Events Around You!
        </h1>
        <p className="text-lg text-ocean-200">
          Stay up-to-date with the most exciting tech events. Whether you're
          into tech talks, Hackathons, or workshops, Eventech helps you find the
          best student clubs and their latest events. Explore by category,
          upvote your favorites, and never miss out on the experiences that
          matter to you!
        </p>
        <Button label="Start browsing →" onClick={browseToHome} />
      </div>
      <img src={hero_image} className="w-[40vw] drop-shadow-xl" alt="" />
    </div>
  );
}

const Button = ({ label, onClick }) => {
  return (
    <a
      onClick={onClick}
      className="relative items-center self-start justify-start inline-block px-7 py-2 overflow-hidden text-lg rounded-full group my-3"
    >
      <span className="translate-x-0 absolute bg-ocean-200 opacity-[3%]"></span>
      <span className="absolute top-0 rounded-r-full left-0 w-[300px] h-60 -mt-1 transition-all duration-500 ease-in-out -translate-x-80 bg-ocean-200 opacity-100 group-hover:translate-x-0"></span>
      <span className="relative text-xl w-full text-ocean-200 transition-colors duration-200 ease-in-out group-hover:text-white">
        {label}
      </span>
      <span className="absolute inset-0 border-[1px] border-ocean-200 rounded-full"></span>
    </a>
  );
};
