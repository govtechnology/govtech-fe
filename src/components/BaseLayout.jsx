import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function BaseLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default BaseLayout;
