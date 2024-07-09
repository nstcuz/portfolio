import React from 'react';
import { useParams } from 'react-router-dom';
import StackIcon from 'tech-stack-icons';
import projects from '../globals/projects';

const Project = () => {
  const { title } = useParams();
  const project = projects.find((project) => project.title === decodeURIComponent(title));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-4 mx-auto w-full max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <div className="mb-4">
        <img src={project.heroImage} alt={${project.title} hero image} className="w-full max-h-[400px] object-cover rounded-lg" />
      </div>
      <p className="mb-4">{project.description}</p>
      <div className="mb-4">
        <a href={project.gitURL} className="text-blue-500 hover:underline">
          View the project on GitHub
        </a>
      </div>
      <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
      <ul className="flex space-x-4">
        {project.stack.map((icon, index) => (
          <li key={index}>{icon}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;