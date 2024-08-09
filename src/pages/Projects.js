import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      tech: 'React, Node.js',
      link: 'https://github.com/your-username/project1'
    },
    // Add more projects here
  ];

  return (
    <div>
      <h2>My Projects</h2>
      {projects.map(project => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          tech={project.tech}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Projects;


