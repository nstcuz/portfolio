import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "JavaScript Card Game",
    gitURL: "https://github.com/nstcuz/JSGame",
    mobileHeroImage: "",
    heroImage: "src/assets/JSGame-hero.png",
    description: "A matching card game"
  },
  {
    title: "Movie Database",
    gitURL: "https://github.com/nstcuz/movie-database",
    mobileHeroImage: "",
    heroImage: "src/assets/MovieDB-hero.png",
    description: "A movie database using TMDB's API to retrieve information about now playing, popular, upcoming & top rated movies. Allowing you to find specific details about every movie in their database. You can find information by scrolling the individual pages, or by using the search option to find a specific movie."
  },
];

const ProjectCarousel = () => {
  const settings = {
    infinite: true,
    accessibility: true,
    cssEase: 'ease-in',
  };

  return (
    <div className="relative w-[95vw] mx-auto border-2 border-neutral-content rounded-3xl mt-8 shadow-md p-4 text-center">
      <Slider {...settings}>
        {projects.map((project, index) => (
        <section key={index} className=''>
          <div>
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <div className="mb-2">
              <a href={project.gitURL} className="">GitHub</a>
            </div>
            <div className="mb-4">
              <img src={project.heroImage} alt={project.title + ' hero image'} className="h-auto max-h-[500px] mx-auto object-cover" />
            </div>

            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">description</div>
              <div className="collapse-content">
                <p>{ project.description }</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">tools</div>
              <div className="collapse-content">
                <p>sup nerds</p>
              </div>
            </div>
          </div>
        </section>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;