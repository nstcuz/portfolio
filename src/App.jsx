import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainContent from './pages/MainContent';
import Header from './components/Header';
import Home from './components/Home';
// import Footer from './components/Footer';

function App() {
  return (
    <div className='site-wrapper bg-base-100'>
      <Header />
      <Home />
      <Routes>
        <Route path="/" element={<MainContent />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;