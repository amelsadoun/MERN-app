import mobile_image from "../../assets/mobile.svg";

export default function Mobile() {
  return (
    <div className="flex flex-wrap desktop:flex-nowrap flex-row desktop:mx-32 my-32 mx-10 justify-around align-middle items-center gap-24 drop-shadow-xl">
      <img className="w-[32vw]" src={mobile_image} alt="" />
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-wrap text-3xl text-lime-200">
          Stay Tuned for Our Upcoming Mobile App!
        </h1>
        <p className="text-lg text-wrap text-lime-100">
          We are thrilled to announce that our EvenTech mobile app is on the
          horizon! With its launch, accessing all your favorite club events will
          become more effortless than ever before. Everything you need will be just a click away. Get ready to experience
          a new level of convenience like never before!
        </p>
      </div>
    </div>
  );
}
