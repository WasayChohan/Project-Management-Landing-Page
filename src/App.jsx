import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Features from "./pages/features/Features";
import Pricing from "./pages/pricing/Pricing";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import "./App.css";
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
