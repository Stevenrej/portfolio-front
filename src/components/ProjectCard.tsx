import React from 'react';
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  github: string;
  date: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, date, link, github }) => {
  return (
    <div className="project-card p-3 rounded-lg ml-auto max-w-3xl z-9">
      <a href={link} target="_blank" rel="noopener noreferrer">
          <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
        <h3 className="text-9xl font-extrabold text-black cursor-pointer">{title}</h3>
      </motion.div>
      </a>
      <p className="text-sm mt-2 text-black">{description}</p>
      <p className="text-sm mt-2 text-black">{date}</p>
      <a href={github} target="_blank" rel="noopener noreferrer" className="text-xs text-black hover:text-gray-600 transition-colors duration-200 ml-auto z-9">
        View Github
      </a>
    </div>
  );
};

export default ProjectCard;
