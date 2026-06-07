import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { NotFound } from "../Pages/NotFound";
import { AnimatePresence } from "framer-motion";
import LandingPage from "../Pages/LandingPage";

export default function Router() {
  const location = useLocation();
  return (
    <>
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </AnimatePresence>
    </>
  );
}
