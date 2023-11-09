import { BrowserRouter, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="font-manrope">
      <BrowserRouter>
        <Navigation />
        <Routes>tes</Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
