import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import HomePage from "./pages/homepage/HomePage";
import FaqPage from "./pages/faq/FaqPage";

function App() {
  return (
    <div className="font-manrope">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
