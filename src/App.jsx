import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ProjectBrowser from './components/ProjectBrowser';
// import Footer from './components/Footer';

function App() {



  return (
    <div className='site-wrapper bg-base-100'>
      <Header />
        <Home />
        <ProjectBrowser />
        <Routes>
          <Route path="/" element={<About />} />
          {/* <Route path="/project" element={<Project/>} /> */}
        </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;