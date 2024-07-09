import React from 'react'
import Hero from '../components/Hero';
import ProjectBrowser from '../components/ProjectBrowser';
import About from '../components/About';

const Home = () => {
  return (
    <div>
        <Hero />
        <ProjectBrowser />
        <About />
    </div>
  )
}

export default Home