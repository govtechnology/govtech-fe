/* eslint-disable react/jsx-key */
import AboutSection from "./sections/about.section";
import HeroSection from "./sections/hero.section";
import StepSection from "./sections/step.section";

function HomePage() {
  return (
    <div className="flex flex-col container max-w-screen-xl overflow-hidden md:overflow-visible">
      <HeroSection />
      <StepSection />
      <AboutSection />
    </div>
  );
}

export default HomePage;
