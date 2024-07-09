import React from 'react';
import { useParams } from 'react-router-dom';
import StackIcon from 'tech-stack-icons';
import projects from '../globals/projects';

const Project = () => {
  const { localURL } = useParams();
  const project = projects.find((project) => project.localURL === decodeURIComponent(localURL));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-4 mx-auto w-full max-w-4xl">

    </div>
  );
};

export default Project;