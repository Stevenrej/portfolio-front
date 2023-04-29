import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import projects from "../data/projects.json";

type Props = {
  currentPage: "projects" | "about" | "contact";
  isFirstRender: boolean;
  setIsFirstRender: (value: boolean) => void;
};

const Projects: React.FC<Props> = ({ currentPage, isFirstRender, setIsFirstRender }) => {

  const isMobile = window.matchMedia("(max-width: 975px)").matches;

  let margin;

  if (isMobile) {
    margin = "mb-2";
  } else {
    margin = "mb-4";
  }

  return (
    <>
    <div>
      {currentPage === "projects" && (
        <motion.div
          key="projects-motion"
          initial={isFirstRender ? { opacity: 1, y: 10 } : { opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 10, transition: { duration: 0.75 } }}
          exit={{ opacity: 0, y: 200, transition: { duration: 0.75 } }}
          onAnimationStart={() => {
            setIsFirstRender(false);
          }}
        >
          <div className={`projects ${margin}`}>
            {isMobile && (
              <h3 className="text-center text-gray-300 font-bold underline">Tap any title to view Project!</h3>
            )}
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                date={project.date}
                link={project.link}
                github={project.github}
              />
            ))}
          </div>
        </motion.div>
      )}
      </div>
    </>
  );
};

export default Projects;
