import search_illustration from "../../assets/search-illustration.svg";
import update_illustration from "../../assets/update-illustration.svg";
import upvote_illustration from "../../assets/upvote-illustration.svg";

export default function Features() {
  const features = [
    {
      label: "Stay Updated on Events",
      description:
        "Discover upcoming student club events and explore detailed information at a glance.",
      image: update_illustration,
    },

    {
      label: "Filter Events Your Way",
      description:
        "Easily search and filter events to match your interests and preferences.",
      image: search_illustration,
    },
    {
      label: "Upvote Your Favorite Events",
      description:
        "Show support for the events you're most excited about by upvoting them.",
      image: upvote_illustration,
    },
  ];

  return (
    <div className="flex rounded-3xl p-5 shadow-2xl shadow-ocean-400 flex-wrap bg-lime-900 desktop:flex-nowrap flex-row justify-between self-center desktop:-mt-52">
      {features.map((feature, index) => (
        <>
          {" "}
          {index !== 0 && <div className="h-80 bg-ocean-500 w-1 mx-3 rounded-full self-center"/>}
          <FeatureCard
            label={feature.label}
            description={feature.description}
            image={feature.image}
          />
        </>
      ))}
    </div>
  );
}

const FeatureCard = ({ label, description, image }) => {
  return (
    <div className="flex flex-col p-5 items-center hover:scale-105 ease-in-out duration-200 text-center w-80 gap-5">
      <img src={image} className="w-52 drop-shadow-lg h-52" alt="" />
      <h3 className="text-lg font-semibold text-ocean-400">{label}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};
