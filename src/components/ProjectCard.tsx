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
    <div className="project-card p-3 rounded-lg ml-auto max-w-3xl z-0">
      <a href={link} target="_blank" rel="noopener noreferrer">
          <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
        <h3 className="text-8xl font-extrabold text-black cursor-pointer text-left">{title}</h3>
      </motion.div>
      </a>
      <p className="text-lg mt-2 text-black text-left">{description}</p>
      <div className="flex justify-between mt-1">
      <p className="text-xl font-bold mt-2 text-black text-left">{date}</p>
      <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <a href={github} target="_blank" rel="noopener noreferrer" className="z-9">
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="50px" height="50px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"/></svg>
      </a>
      </motion.div>
      </div>
    </div>
  );
};

export default ProjectCard;
