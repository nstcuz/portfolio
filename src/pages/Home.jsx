import React from 'react'
import Hero from '../components/Hero';
import ProjectBrowser from '../components/ProjectBrowser';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
        <Hero />
        <ProjectBrowser />
        <About />
        <Contact />
    </div>
  )
}

export default Home