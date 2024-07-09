import React from 'react'
import TechStackIcons from './TechStackIcons';
import ToolStackIcons from './ToolStackIcons';
import Music from '../components/Music';

const About = () => {
  const activity = [
    'making <a class="border-transparent hover:border-dashed hover:border-b-neutral hover:border-2 " href="https://www.instagram.com/p/CfEemv4ojqj/?hl=en&img_index=1">focaccia</a> a bit too often', 
    'currently riding a <a class="about-links" href="https://faworldentertainment.com/en-ca/collections/hockey">Hockey</a> skateboard',
    'continuing my medicore skincare routine',
    'obviously enjoying the occasional <a class="about-links" href="https://yellowdogbeer.com/beers/chase-my-tail/">pint</a>',
    'listening to more country music than I\'m proud to admit',
    'building websites, I even like designing them'
  ];

//  you can pull the playlist ID out of any playlists URL 
// https://open.spotify.com/playlist/4Kss2OVhImHSFDVlpMPDni?si=72f5b85bdcdb403b
  const playlistId = '4Kss2OVhImHSFDVlpMPDni';

  return (
    <section className='mt-16 w-[95vw] mx-auto shadow-md border-2 border-neutral-content rounded-3xl bg-gradient-to-b from-base-200 via-accent to-base-200' id='about'>
      <div className='m-4 my-8 md:mx-auto flex flex-col justify-center items-center shadow-md bg-base-200 rounded-2xl max-w-[920px] bg-opacity-70'> 
        <h2 className='font-UbuntuMono mb-4'>a bit about me:</h2>
        <p className='mx-auto my-4 px-4'>Hi there, im nic. A BCIT student currently participating in the front end development program. I like creating applications and bringing life to my projects with creativity.</p>
          <ul className="w-full ">
          {activity.map((item, index) => (
            <li
              key={index}
              className={`w-sptWidthForMargin py-2 px-2 border-t-2 border-neutral border-dashed text-center mx-auto ${index === activity.length - 1 ? 'border-b-2' : ''}`}
              dangerouslySetInnerHTML={{ __html: item }}
            ></li>
          ))}
          </ul>

      <section className='p-2 mt-8 mb-4 mx-4 flex flex-col justify-center items-center bg-base-200 border-2 border-neutral-content border-opacity-20 shadow-sm rounded-2xl'> 
        <div className='w-full mx-auto'>
          <h3 className='text-center mb-4'>some software i use:</h3>
          <TechStackIcons />
        </div>
        <div className='w-full'>
          <h3 className='text-center mt-6 mb-4'>some tools i use:</h3>
          <ToolStackIcons  />
        </div>
      </section>
      <Music playlistId={playlistId}/>
    </div>
  </section>
  )
}

export default About
