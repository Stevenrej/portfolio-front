import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav>
      <h1>Steven Rejdukowski</h1>
      <p>Full-Stack Software Developer</p>
      <p>Chicago Illinois</p>
      <a
        href="https://www.linkedin.com/in/steven-rejdukowski-47b879130/"
        target="_blank"
      >
        LinkedIn
      </a>
      <a href="https://github.com/Stevenrej" target="_blank">
        GitHub
      </a>
      <a
        href="https://docs.google.com/document/d/15VKSgodzYJZAe4ZJACTgC0Xtnjn-EXsU8yn6rk659d8/edit?usp=sharing"
        target="_blank"
      >
        Resume
      </a>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navigation;
