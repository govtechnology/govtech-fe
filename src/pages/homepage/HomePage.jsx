/* eslint-disable react/jsx-key */
import AboutSection from "./sections/about.section";
import HeroSection from "./sections/hero.section";

function HomePage() {
  return (
    <div className="flex flex-col container max-w-screen-xl">
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default HomePage;
