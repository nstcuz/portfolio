import React from 'react';


const Home = () => {
  const name = 'nic cousins';
  const title = 'front-end web developer';
  const introBlurb = 'Hi there, im nic. A BCIT student currently participating in the front end development program. I like creating applications and bringing life to projects with creativity.';

  return (
    <div className="hero relative h-screen bg-base-100 bg-opacity-25 w-[95vw] mx-auto mb-20">
      <img className='absolute w-full h-full top-0 left-0' src="src/assets/aurora-borealis.png" alt=""/>
      <div className='random-blob top-0 left-0'></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6 pb-2">{title}</p>
          <p className="py-6">{introBlurb}</p>
          <button className="btn btn-primary">see my works</button>
        </div>
      </div>
      <svg
        className='absolute bottom-16 size-8 animate-bounce'
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
      </svg>
    </div>
  );
}

export default Home;