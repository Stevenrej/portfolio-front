import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Tune-Port',
      description: 'A personalized Spotify experience for users with customized recommendations, in-depth listening habit analysis, and playlist creation tools. Wrapped Portal allows users to discover new music that aligns with their unique tastes and maximize their musical journey.',
      date: 'Feb-Mar 2023',
      link: 'https://tune-port.netlify.app/',
      github: 'https://github.com/Wrapped-Portal/wrapped-portal-client',
    },
    {
      title: 'Spicetown Guitars',
      description: `This website showcases the work and pricing of a guitar repair shop, and features a contact form for customers to schedule repairs. With a clean and modern design, high-quality images of the shop's work, and a user-friendly navigation, the website effectively communicates the services offered by the shop and serves as a valuable tool for expanding their customer base.`,
      date: 'Mar 2023',
      link: 'https://www.spicetownguitars.com/',
      github: 'https://github.com/Spice-Town/spicetown-client',
    },
    {
      title: 'Duff Art & Design',
      description: `A user-friendly platform to showcase an artist's digital art portfolio. Our solution utilized Cloudinary and MongoDB, resulting in a clean and seamless website that effectively showcases the client's art while enhancing their online presence.`,
      link: 'https://duffdesign.netlify.app/',
      date: 'Feb 2023',
      github: 'https://github.com/DuffArt-Design/Art-Design',
    },
    {
      title: 'Prodigy-Path',
      description: 'A mentorship platform that connects individuals for skills building and support with a search function, messaging, and contact sharing.',
      link: 'https://prodigy-path.netlify.app/',
      date: 'Jan 2023',
      github: 'https://github.com/Prodigy-Path/Prodigy-Path',
    },
  ];

  return (
    <div className='projects mb-14'>    
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
  );
};

export default Projects;
