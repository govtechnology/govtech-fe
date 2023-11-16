/* eslint-disable react/prop-types */
import NavigationMobileItem from "./NavigationMobileItem";

const NavigationMobile = () => {
  return (
    <div className="bg-white/80 backdrop-blur-3xl fixed z-50 w-screen h-20 bottom-0 md:hidden visible">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto overflow-hidden">
        <NavigationMobileItem to="/" icon="/assets/svgs/home.svg" />
        <NavigationMobileItem to="/about" icon="/assets/svgs/info.svg" />
        <NavigationMobileItem to="/faq" icon="/assets/svgs/help.svg" />
        <NavigationMobileItem
          to="/dashboard"
          icon="/assets/svgs/dashboard.svg"
        />
      </div>
    </div>
  );
};

export default NavigationMobile;
