import Features from "./features";
import Hero from "./hero";
import LeandingHeader from "./landingHeader";
import Mobile from "./mobile";

export default function Landing() {
  return (
    <div className="flex flex-col ">
      <LeandingHeader />
      <Hero />
      <Features />
      <Mobile />
    </div>
  );
}
