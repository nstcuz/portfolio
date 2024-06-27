import React from 'react'
import About from '../components/About'
import ProjectBrowser from '../components/ProjectBrowser'

function MainContent(){

  return (
    <section className='h-auto w-fit mt-6 mx-2 flex sm:flex-row flex-col justify-center items-center border-2 border-neutral-content rounded-3xl'> 
        <About />
        <ProjectBrowser />
    </section>
  )
}

export default MainContent