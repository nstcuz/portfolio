import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Project from './pages/Project';

function App() {
  return (
    <div className='site-wrapper bg-base-100'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:localURL" element={<Project />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;