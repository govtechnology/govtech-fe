import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cookies from "universal-cookie";

import HomePage from "./pages/public/homepage/HomePage";
import FaqPage from "./pages/public/faq/FaqPage";

import AOS from "aos";
import "aos/dist/aos.css";
import BaseLayout from "./components/BaseLayout";
import LoginPage from "./pages/public/auth/LoginPage";
import NoPage from "./pages/public/general/NoPage";
import DashboardPage from "./pages/user/dashboard/DashboardPage";
import SignUpPage from "./pages/public/auth/SignUpPage";
import ProfilePage from "./pages/user/profile/ProfilePage";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import { useGetUserQuery } from "./redux/api/userApi";
import LoaderPage from "./pages/public/general/LoaderPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data: userData, isSuccess: userSuccess } = useGetUserQuery();
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
          {isLoggedIn && userSuccess ? (
            <>
              {userData.user.role === "ADMIN" ? (
                <Route path="/dashboard" element={<AdminDashboard />} />
              ) : (
                <Route path="/dashboard" element={<DashboardPage />} />
              )}
              <Route path="/dashboard/profile" element={<ProfilePage />} />
            </>
          ) : (
            <Route path="*" element={<LoaderPage />} />
          )}
        </Route>
        <Route path="/auth/signin" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
