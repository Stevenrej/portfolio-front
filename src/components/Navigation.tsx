import React from "react";
import { Link } from "react-router-dom";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <nav className="fixed bottom-0 inset-x-0 p-4 mb-10 mx-auto w-full text-white-800">
      <div className="flex space-between h-8">
        <div className="flex flex-col justify-end w-1/2 ml-10">
          <div>
            <h1 className="text-2xl font-bold text-white-800">
              Steven Rejdukowski
            </h1>
            <p className="font-medium text-white-800">
              Full-Stack Software Developer
            </p>
            <p className="font-medium text-white-800">Chicago Illinois</p>
          </div>
          <div className="flex mt-4">
            <Link
              to="/"
              className="text-white-800 hover:text-gray-200 mx-2 font-medium"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="text-white-800 hover:text-gray-200 mx-2 font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white-800 hover:text-gray-200 mx-2 font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex justify-end w-1/2 mr-10 mt-auto mb-0">
          <div className="flex h-full">
            <a
              href="https://www.linkedin.com/in/steven-rejdukowski-47b879130/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-800 hover:text-gray-200 mx-2 z-10"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Stevenrej"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-800 hover:text-gray-200 mx-2 z-10"
            >
              GitHub
            </a>
            <a
              href="https://docs.google.com/document/d/15VKSgodzYJZAe4ZJACTgC0Xtnjn-EXsU8yn6rk659d8/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-800 hover:text-gray-200 mx-2 z-10"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
