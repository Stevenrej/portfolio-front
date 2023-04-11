import React, { useState } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "./styles.css";
import { AnimatePresence } from "framer-motion";

type Props = {
  currentPage: "projects" | "about" | "contact";
};

const AnimatedRoutes: React.FC<Props> = ({ currentPage }) => {
  const [isFirstRender, setIsFirstRender] = useState(true);

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Projects
              currentPage={currentPage}
              isFirstRender={isFirstRender}
              setIsFirstRender={setIsFirstRender}
            />
          }
        />
        <Route path="/about" element={<About currentPage={currentPage} />} />
        <Route
          path="/contact"
          element={<Contact currentPage={currentPage} />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
