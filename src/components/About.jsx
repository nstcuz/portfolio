import React from 'react'
import ProjectBrowser from '../components/ProjectBrowser';

const About = () => {
  return (
    <section className='h-screen w-[95vw] flex flex-col justify-center items-center mx-auto'>
      <div className='w-full flex flex-col justify-center items-center border-2 border-solid border-softBlack'>
          <p>Hi, thanks for checking out my Portfolio, My name is Nic Cousins. I am currently enrolled in BCIT's Front-end Web Development program. If you would like to know more about myself, ill leave my interests and hobbies below.</p>
      </div>
      <div className=''>
        <h2>nic always:</h2>
          <h3>Location:</h3>
          <p>Kelowna, BC Canada</p>
          <h3>Interests:</h3>
          <p>Computers, Programming, Skateboarding, Snowboarding, Music</p>
        <h2>nic lately:</h2>
        <ul>
          <li>Making <a href=""></a> this Foccasia Bread a bit too often</li>
          <li>Currently riding a Hockey Skateboard, Indy trucks, & Bones</li>
          <li>Listening to more country than im proud to mention</li>
          <li>Trying to use FOSS more consistently, I enjoy the transparency</li>
          <li>Playing with my Kitty</li>
        </ul>
      </div>
      <div className=''>
        <div className=''>

        </div>
        <div className=''>
            
        </div>
      </div>
      {/* <ProjectBrowser /> */}
    </section>
  )
}

export default About