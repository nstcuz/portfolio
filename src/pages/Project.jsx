import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StackIcon from 'tech-stack-icons';
import projects from '../globals/projects';
import ProjectButtons from '../components/ProjectButtons';

const Project = () => {
  const { localURL } = useParams();
  const project = projects.find(p => p.localURL === localURL);

  return (
    <section className="relative mt-20 w-[95vw] min-h-full md:h-heightHome mx-auto border-2 border-neutral-content rounded-3xl shadow-md p-4 text-center bg-gradient-to-b from-base-200 via-info to-base-200 overflow-hidden">
      <div className="pb-4 mb-4">
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <a href={project.gitURL} className="flex justify-center items-center">
          <svg className="fill-neutral-content" 
               xmlns="http://www.w3.org/2000/svg" 
               width="24" 
               height="24" 
               viewBox="0 0 24 24">
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
            </svg>
        </a>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 mb-4 md:mr-4 flex flex-col justify-center items-center">
          <img src={project.heroImage} alt={`${project.title} hero`} className="p-4 rounded-lg shadow-lg bg-base-200 bg-opacity-35 max-w-[600px] w-full h-auto object-cover" />
        </div>
        <div className="md:w-1/3 flex flex-col justify-around items-around p-4 rounded-lg shadow-lg bg-base-200 bg-opacity-35">
          <div>
            <div>
              <h2 className="mb-2">Tech Stack</h2>
              <ul className="flex justify-center items-center space-x-4 flex-wrap">
                {project.stack.map((tech, index) => (
                  <li key={index}>
                    <StackIcon name={tech} className="size-10 get-down" />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-2">Tools</h2>
              <ul className="flex justify-center items-center space-x-4 flex-wrap">
                {project.tools.map((tool, index) => (
                  <li key={index}>
                    <StackIcon name={tool} className="size-10 get-down" />
                  </li>
                ))}
              </ul>
            </div>
            <ul className="min-w-full p-4 rounded-lg shadow-lg bg-base-200 bg-opacity-35 border-2 border-opacity-25 border-neutral-content">
              <h2>Key Points</h2>
              {project.keypoints.map((point, index) => (
                <li className='list-disc list-inside md:text-left md:ml-8'
                  key={index}>
                  {point}
                </li>
              ))}
          </ul>
          </div>
        </div>
      </div>
      <div className="mt-4">
      </div>
      <ProjectButtons currentProject={project} className="mt-4" />
    </section>
  );
};

export default Project;