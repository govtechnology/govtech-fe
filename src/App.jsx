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

import AboutPage from "./pages/public/about/AboutPage";

import { SnackbarProvider } from "notistack";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data: userData, isSuccess: userSuccess } = useGetUserQuery();
  const cookies = new Cookies();

  useEffect(() => {
    AOS.init();
    if (cookies.get("ACCESS-TOKEN") && cookies.get("REFRESH-TOKEN")) {
      setIsLoggedIn(true);
    }

    (function (m, a, z, e) {
      var s, t;
      try {
        t = m.sessionStorage.getItem("maze-us");
      } catch (err) {}

      if (!t) {
        t = new Date().getTime();
        try {
          m.sessionStorage.setItem("maze-us", t);
        } catch (err) {}
      }

      s = a.createElement("script");
      s.src = z + "?apiKey=" + e;
      s.async = true;
      a.getElementsByTagName("head")[0].appendChild(s);
      m.mazeUniversalSnippetApiKey = e;
    })(
      window,
      document,
      "https://snippet.maze.co/maze-universal-loader.js",
      "db82ff20-2dfb-4fa7-b83c-80ed7a3fc181"
    );
  }, []);

  return (
    <div className="font-manrope">
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
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
          {!cookies.get("ACCESS-TOKEN") && !cookies.get("REFRESH-TOKEN") && (
            <>
              <Route path="/auth/signin" element={<LoginPage />} />
              <Route path="/auth/signup" element={<SignUpPage />} />
            </>
          )}

          <Route path="*" element={<NoPage />} />
        </Routes>
      </SnackbarProvider>
    </div>
  );
}

export default App;
