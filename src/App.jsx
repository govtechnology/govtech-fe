import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import FaqPage from "./pages/faq/FaqPage";

import AOS from "aos";
import "aos/dist/aos.css";
import BaseLayout from "./components/BaseLayout";
import LoginPage from "./pages/auth/LoginPage";
import NoPage from "./pages/general/NoPage";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="font-manrope">
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Route>
        <Route path="/auth/signin" element={<LoginPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
