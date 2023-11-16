import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cookies from "universal-cookie";

import HomePage from "./pages/homepage/HomePage";
import FaqPage from "./pages/faq/FaqPage";

import AOS from "aos";
import "aos/dist/aos.css";
import BaseLayout from "./components/BaseLayout";
import LoginPage from "./pages/auth/LoginPage";
import NoPage from "./pages/general/NoPage";
import DashboardPage from "./pages/user/dashboard/DashboardPage";
import SignUpPage from "./pages/auth/SignUpPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    AOS.init();
    if (cookies.get("ACCESS-TOKEN") && cookies.get("REFRESH-TOKEN")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="font-manrope">
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/faq" element={<FaqPage />} />
          {isLoggedIn ? (
            <Route path="/dashboard" element={<DashboardPage />} />
          ) : null}
        </Route>
        <Route path="/auth/signin" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
