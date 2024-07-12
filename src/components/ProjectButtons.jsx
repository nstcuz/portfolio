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
    <div className="flex justify-around sm:mx-[25%] mt-8 lg:justify-between lg:mt-24">
      <button onClick={handlePrevProject} className="btn left-[25%]">
        previous project
      </button>
      <button onClick={handleNextProject} className="btn right-[25%]">
        next project
      </button>
    </div>
  );
};

export default ProjectButtons;