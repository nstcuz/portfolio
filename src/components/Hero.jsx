import React, { useEffect } from 'react';

const Hero = () => {
  const name = 'nic cousins';
  const title = 'front-end web developer';

  return (
    <section className="hero relative h-heightHome bg-transparent bg-opacity-95 w-[95vw] mx-auto my-16 md:mt-20 border-2 border-neutral-content rounded-3xl shadow-md">
      <img className='absolute w-full h-full bg-paperBG bg-opacity-2 top-0 left-0 rounded-3xl' src="src/assets/aurora-borealis.png" alt=""/>
      <div className='aurora-borealis top-0 left-0 rounded-3xl'></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="pop-up text-5xl font-bold selection:text-neutral">{name}</h1>
          <p className="pop-up py-6 pb-2 selection:text-neutral">{title}</p>
          <a className="pop-up btn btn-primary mt-10 text-neutral-content rounded-full border-neutral-content" href='#anchor'>see my works</a>
        </div>
      </div>
      <a 
        href="#anchor"
        className='absolute mx-auto bottom-8'>
        <svg
          className='size-8 animate-bounce fill-neutral-content'
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id='anchor'>
          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
        </svg>
      </a>
    </section>
  );
}

export default Hero;