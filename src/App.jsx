import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <Router>
      <main className="relative bg-[#0f1117] text-white overflow-hidden">
        {/* 🌀 Gradient Image */}
        <img
          className="absolute top-0 right-0 opacity-60 -z-10"
          src="/gradient.png"
          alt="Gradient"
        />

        {/* 💫 Cool Blur */}
        <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#63b7e9] -rotate-[30deg] -z-10" />

        {/* 🔝 Shared Header */}
        <Header />

        {/* 🌐 Route-Based Rendering */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Testimonials />
                <Pricing />
                <Contact />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}
