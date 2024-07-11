import React from 'react';
import { useNavigate } from 'react-router-dom';
import projects from '../globals/projects';

const ProjectButtons = ({ currentProject }) => {
  const navigate = useNavigate();
  const projectIndex = projects.findIndex(p => p.localURL === currentProject.localURL);

  const handleNextProject = () => {
    const nextIndex = (projectIndex + 1) % projects.length;
    navigate(`/project/${projects[nextIndex].localURL}`);
  };

  const handlePrevProject = () => {
    const prevIndex = (projectIndex - 1 + projects.length) % projects.length;
    navigate(`/project/${projects[prevIndex].localURL}`);
  };

  return (
    <div className="flex justify-between sm:mx-[25%] mt-8">
      <button onClick={handlePrevProject} className="btn">
        previous project
      </button>
      <button onClick={handleNextProject} className="btn">
        next project
      </button>
    </div>
  );
};

export default ProjectButtons;