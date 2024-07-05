import React from 'react'
import TechStackIcons from './TechStackIcons';
import ToolStackIcons from './ToolStackIcons';
import Music from '../components/Music';

const About = () => {
  const activity = [
    'making <a href="#">focaccia</a> a bit too often', 
    'currently riding a Hockey skateboard',
    'listening to more country music than I\'m proud to admit',
    'continuing to do a poor job keeping up with my skincare routine',
    'enjoying the occasional pint',
    'building applications/websites, I even like to design them',
    'dislike using capital letters (willing to make an exception)'
  ];

//  you can pull the playlist ID out of any playlists URL 
  const playlistId = '2NI9LQewDkN4voYq8e9N1L';

  return (
    <section className='mt-8 shadow-md border-2 border-neutral-content rounded-3xl w-[95vw] mx-auto'>
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
            className="rounded-box object-cover w-full" />
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
        {activity.map((item, index) => (
          <li
            key={index}
            className={`w-full py-2 border-t-2 border-neutral border-dashed ${index === activity.length - 1 ? 'border-b-2' : ''}`}
            dangerouslySetInnerHTML={{ __html: item }}
          ></li>
        ))}
      </ul>

      <section className='mt-10 p-2 pb-3 w-full flex flex-col justify-center items-center bg-base-200 border-2 border-neutral-content border-opacity-5 shadow-sm rounded-3xl'> 
        <div className='w-full'>
          <h3 className='text-center mb-4'>some software to help me get the job done:</h3>
          <TechStackIcons />
        </div>
        <div className='w-full mt-18'>
          <h3 className='text-center mt-6 mb-4'>some tools that help me enjoy the software:</h3>
          <ToolStackIcons  />
        </div>
      </section>
        <Music playlistId={playlistId}/>
        {/* <SpotifyPlayer /> */}
    </div>
  </section>
  )
}

export default About
