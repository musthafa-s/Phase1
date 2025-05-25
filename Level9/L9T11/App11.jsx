import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Homee from "./Homee";
import Menuu from "./Menuu";
import About from "./About";
import Contactt from "./Contactt";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.6,
};

const AnimatedPage = ({ children }) => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <motion.div
      initial={prefersReducedMotion ? false : "initial"}
      animate={prefersReducedMotion ? false : "in"}
      exit={prefersReducedMotion ? false : "out"}
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Homee /></AnimatedPage>} />
        <Route path="/menu" element={<AnimatedPage><Menuu /></AnimatedPage>} />
        <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
        <Route path="/contact" element={<AnimatedPage><Contactt /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App11() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
