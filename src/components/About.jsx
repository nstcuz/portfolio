import React from 'react'
import TechStackIcons from './TechStackIcons';
import ToolStackIcons from './ToolStackIcons';
import Music from '../components/Music';

const About = () => {
  const activity = {
    // 1: `making foccasia a bit too often`, // i want to put <a> around foccasia 
    2: 'currently riding a Hockey skateboard',
    3: 'listening to more country music than im proud to admit',
    4: 'continuing to do a poor job at keeping up with my skin care routine',
    5: `enjoying the occasional pint`,
    6: 'i like to build applications/websites, i even like to design them',
    7: 'dislike using capital letters (willing to make an acception for you)'
  }

  const playlistId = '27zZvhmflIf1p88NEED8DE';

  return (
    <section className='shadow-md rounded-3xl'>
    <div className='w-full mt-2 overflow-x-visible'>
      <div className="carousel carousel-center bg-neutral rounded-box space-x-4 p-2 mx-2">
        <div className="carousel-item max-h-[275px] w-full">
          <img
            src="src/assets/almost-headshot.jpg"
            className="rounded-box object-cover w-full" />
        </div>
        <div className="carousel-item max-h-[275px] w-full">
          <img
            src="src/assets/skate-test.png"
            className="rounded-box object-cover object-top w-full" />
        </div>
        <div className="carousel-item max-h-[275px] w-full">
          <img
            src="src/assets/21f2c8d4-8186-4896-870b-e31f9d8e840b.jpg"
            className="rounded-box object-cover w-full" />
        </div>
        <div className="carousel-item max-h-[275px] w-full">
          <img
            src="src/assets/me-n-dimmi.jpg"
            className="rounded-box object-cover w-full" />
        </div>
      </div>
    </div>

    <div className='p-2 mt-4 bg-base-100 flex flex-col justify-center items-center rounded-3xl'> 
      <h2 className='text-xl sm:text-2xl mb-4'>a bit about me:</h2>
      <ul className="text-sm">
        <li className='w-full py-2 border-t-2 border-neutral border-dashed'>making focaccia a bit too often</li>
        <li className='w-full py-2 border-t-2 border-neutral border-dashed'>{activity[2]}</li>
        <li className='w-full py-2 border-t-2 border-neutral border-dashed'>{activity[3]}</li>
        <li className='w-full py-2 border-t-2 border-neutral border-dashed'>{activity[4]}</li>
        <li className='w-full py-2 border-t-2 border-neutral border-dashed'><span className='line-through'>playing beer-darts in my denim jorts </span>{activity[5]}</li>
        <li className='w-full py-2 border-t-2 border-neutral border-dashed'>{activity[6]}</li>
        <li className='w-full py-2 border-y-2 border-neutral border-dashed'>{activity[7]}</li>
      </ul>

      <section className='mt-10 p-4 w-full flex flex-col justify-center items-center  bg-base-200 border-2 border-neutral-content border-opacity-50 rounded-3xl'> 
        <div className='w-full'>
          <h3 className='text-center mb-4'>some software to help me get the job done:</h3>
          <TechStackIcons />
        </div>
        <div className='w-full mt-18'>
          <h3 className='text-center mt-6 mb-4'>some tools that help me enjoy the software:</h3>
          <ToolStackIcons  />
        </div>

        <Music playlistId={playlistId}/>
      </section>
    </div>
  </section>
  )
}

export default About
