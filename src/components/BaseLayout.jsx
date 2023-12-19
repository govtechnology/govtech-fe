import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import NavigationMobile from "./NavigationMobile";

function BaseLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
      <NavigationMobile />
    </>
  );
}

export default BaseLayout;
