import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-center">
      <h1 className="text-white text-2xl font-bold">Steven Rejdukowski</h1>
      <p className="text-gray-400 font-medium">
        Full-Stack Software Developer
      </p>
      <p className="text-gray-400 font-medium">Chicago Illinois</p>
      <a
        href="https://www.linkedin.com/in/steven-rejdukowski-47b879130/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-200 hover:text-white mx-2"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/Stevenrej"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-200 hover:text-white mx-2"
      >
        GitHub
      </a>
      <a
        href="https://docs.google.com/document/d/15VKSgodzYJZAe4ZJACTgC0Xtnjn-EXsU8yn6rk659d8/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-200 hover:text-white mx-2"
      >
        Resume
      </a>
      <Link
        to="/about"
        className="text-gray-200 hover:text-white mx-2 font-medium"
      >
        About
      </Link>
      <Link
        to="/projects"
        className="text-gray-200 hover:text-white mx-2 font-medium"
      >
        Projects
      </Link>
      <Link
        to="/contact"
        className="text-gray-200 hover:text-white mx-2 font-medium"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navigation;
