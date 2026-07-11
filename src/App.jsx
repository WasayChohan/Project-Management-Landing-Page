import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Features from "./pages/features/Features";
import Pricing from "./pages/pricing/Pricing";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
