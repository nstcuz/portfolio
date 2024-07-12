import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Home from './pages/Home';
import Project from './pages/Project';

const App = () => {
  return (
    <div className='site-wrapper bg-base-100'>
      <ScrollToTop />
      <Link to="#main" className='screen-reader-text hidden text-center'>skip to main</Link>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:localURL" element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;