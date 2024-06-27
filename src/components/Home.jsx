import React from 'react';

const Home = () => {
  const name = 'nic cousins';
  const title = 'front-end web developer';
  const introBlurb = 'Hi there, im nic. A BCIT student currently participating in the front end development program. I like creating applications and bringing life to projects with my creativity.';

  return (
    <section className="hero relative h-heightHome bg-transparent bg-opacity-95 w-[95vw] mx-auto mt-16 border-2 border-neutral-content rounded-3xl shadow-md">
      <img className='absolute w-full h-full top-0 left-0 rounded-3xl' src="src/assets/aurora-borealis.png" alt=""/>
      <div className='aurora-borealis top-0 left-0 rounded-3xl'></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold selection:text-neutral">{name}</h1>
          <p className="py-6 pb-2 selection:text-neutral">{title}</p>
          <p className="py-6 selection:text-neutral">{introBlurb}</p>
          <button className="btn btn-primary text-neutral-content rounded-full border-neutral-content">see my works</button>
        </div>
      </div>
        <a 
          href="#"
          className='absolute mx-auto bottom-8'>
          <svg
            className='size-8 animate-bounce'
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
          </svg>
        </a>
    </section>
  );
}

export default Home;