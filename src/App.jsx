import { useState } from "react";
import Router from "./routes/Router.jsx";
import Mobile from "./Navigation/Mobile.jsx";
import HeroLogo from "./assets/Logo.jsx";
import { Home } from "./components/Home.jsx";
import Navbar from "./Navigation/Navbar.jsx";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gray-800 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <HeroLogo />
          </div>
          <div className="hidden md:block">
            <Navbar />
          </div>
          <div>
            <a
              href="#contact"
              className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Hire Me
            </a>
          </div>
          <div className="md:hidden">
            <Mobile />
          </div>
        </div>
      </nav>
      <main className="pt-0">
        <Router />
      </main>
    </>
  );
}
