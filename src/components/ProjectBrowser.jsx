import React from 'react';
import StackIcon from "tech-stack-icons";
import '../assets/woocommerce.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import projects from '../globals/projects';

const ProjectCarousel = () => {
  const slider = React.useRef(null);
  // slick settings
  const settings = {
    infinite: true,
    accessibility: true,
    cssEase: 'ease-in',
    arrows: false,

  };

  return (
    <div className="relative w-[95vw] h-max mx-auto border-2 border-neutral-content rounded-3xl shadow-md p-4 text-center bg-gradient-to-b from-base-200 via-primary to-base-200"  id='projects'>
      <div className="p-2 mx-auto my-auto max-w-[920px] bg-base-200 shadow-md rounded-2xl bg-opacity-70">
        <Slider ref={slider} {...settings}>
          {projects.map((project, index) => (
            <section key={index}>
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <div className="mb-2">
                <a href={project.gitURL} className="flex justify-center items-center"><p className='mr-2'>see the process at</p>
                <svg className="fill-neutral-content" 
                     xmlns="http://www.w3.org/2000/svg" 
                     width="24" 
                     height="24" 
                     viewBox="0 0 24 24">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/>
                </svg>
                </a>
              </div>
              <div className="mb-4">
                <img src={project.heroImage} alt={project.title + ' hero image'} className="h-auto max-h-[400px] mx-auto object-cover" />
              </div>

              <div className="collapse collapse-arrow bg-base-100 rounded-md">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <h3 className="collapse-title text-xl font-medium">description</h3>
                <div className="collapse-content">
                  <p>{project.description}</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100 rounded-md">
                <input type="radio" name="my-accordion-2" />
                <h3 className="collapse-title text-xl font-medium">stack</h3>
                <div className="collapse-content">
                  <ul>
                    {project.stack.map((icon, iconIndex) => (
                      <li key={iconIndex} className="inline-flex"> {icon} </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </Slider>
        <button className='text-3xl mr-2' onClick={() => slider?.current?.slickPrev()}>&#8592;</button>
        <button className='text-3xl ml-2' onClick={() => slider?.current?.slickNext()}>&#8594;</button>
      </div>
      <button className='btn btn-primary mt-4'  >more details &#8702;</button>
    </div>
  );
};

export default ProjectCarousel;
