import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for project 1',
      link: 'https://example.com/project-1',
    },
    // Add more projects here
  ];

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Projects;
