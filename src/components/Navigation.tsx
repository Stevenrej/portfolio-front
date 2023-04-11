import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface NavigationProps {
  setCurrentPage: React.Dispatch<
    React.SetStateAction<"projects" | "about" | "contact">
  >;
  currentPage: "projects" | "about" | "contact";
}

const Navigation: React.FC<NavigationProps> = ({
  setCurrentPage,
  currentPage,
}) => {
  const handleLinkClick = (page: "projects" | "about" | "contact") => {
    setCurrentPage(page);
    const container = document.getElementById("scroll");
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed bottom-0 inset-x-0 p-4 mb-10 mx-auto w-full text-white-800" style={{ zIndex: 100 }}>
      <div className="flex space-between h-8">
        <div className="flex flex-col justify-end w-1/2 ml-10">
          <div>
            <h1 className="text-3xl font-extrabold text-white-800">
              Steven Rejdukowski
            </h1>
            <p className="font-medium text-white-800 ml-2 mt-2">
              Full-Stack Software Developer
            </p>
            <p className="font-medium text-white-800 ml-2 mt-2">
              Chicago Illinois
            </p>
          </div>
          <div className="flex mt-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/"
                className="text-white-800 hover:text-gray-200 mx-2 ml-2 font-bold"
                onClick={() => {
                  handleLinkClick("projects");
                }}
              >
                Projects
    
                  <span className="inline-block ml-2 dash"  style={{ opacity: currentPage === "projects" ? 1 : 0 }}>&#x2022;</span>
      
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/about"
                className="text-white-800 hover:text-gray-200 mx-2 font-bold"
                onClick={() => {
                  handleLinkClick("about");
                }}
              >
                About

                  <span className="inline-block ml-2 dash"  style={{ opacity: currentPage === "about" ? 1 : 0 }}>&#x2022;</span>
              
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/contact"
                className="text-white-800 hover:text-gray-200 mx-2 font-bold"
                onClick={() => {
                  handleLinkClick("contact");
                }}
              >
                Contact
  
                  <span className="inline-block ml-2 dash"  style={{ opacity: currentPage === "contact" ? 1 : 0 }}>&#x2022;</span>
    
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-end w-1/2 mr-10 mt-auto mb-0">
          <div className="flex h-full" >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a
                href="https://www.linkedin.com/in/steven-rejdukowski-47b879130/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-800 font-bold hover:text-gray-200 mx-5 "
              >
                LinkedIn
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a
                href="https://github.com/Stevenrej"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-800 font-bold hover:text-gray-200 mx-5 "
              >
                GitHub
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a
                href="https://docs.google.com/document/d/15VKSgodzYJZAe4ZJACTgC0Xtnjn-EXsU8yn6rk659d8/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-800 font-bold hover:text-gray-200 mx-5 "
              >
                Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
