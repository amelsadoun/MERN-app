import shape1 from "../../assets/bg-1.svg";
import shape2 from "../../assets/bg-2.svg";
import shape3 from "../../assets/bg-3.svg";
import shape4 from "../../assets/bg-4.svg";

export default function Background() {
  return (
    <div>
      <div className="bg-lime-900 blur-md fixed opacity-40 -z-10 w-[100vw] h-[100vh]">
        {/* <img src={shape1} className="floating-shape shape1 fixed top-50 -left-80 h-[100%]" alt="" />
        <img src={shape2} className="floating-shape shape2 fixed top-20 right-96 h-[90%]" alt="" />
        <img src={shape3} className="floating-shape shape3 fixed top-96 -right-20 h-[60%]" alt="" />
        <img src={shape4} className="floating-shape shape4 fixed -top-20 h-[50%] scale-75 -right-20" alt="" />
        <img src={shape2} className="floating-shape shape5 fixed h-[50%] left-52 -top-20 opacity-60" alt="" /> */}
      </div>
    </div>
  );
}
