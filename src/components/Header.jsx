import React, { useState, useEffect } from 'react';
import DarkModeSwitch from './DarkMode';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const [time, setTime] = useState(formatTime);

  useEffect(() => {
    const updateTime = setInterval(() => {
      setTime(formatTime());
    }, 1000);

    return () => clearInterval(updateTime);
  }, []);

  function formatTime() {
    const date = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: false };
    return date.toLocaleTimeString('en-US', options);
  }


  return (
    <header className="fixed w-[95%] mt-3 mx-auto top-0 left-0 right-0 z-10 flex justify-center items-center bg-transparent">
      <nav className="h-10 flex justify-between items-center w-full border-2 border-neutral-content rounded-full bg-base-100 backdrop-filter backdrop-blur-md bg-opacity-30 ">
        <div className="flex justify-center items-center text-lg ml-4">
          <a href="#">
            <img className='inline-block mr-2 text-base-content"' src="src/assets/globe.svg" alt="a globe" /><span>{ time }</span>
          </a>
        </div>
        <div className='flex justify-between items-center bg-transparent min-w-[65px]'>
          <DarkModeSwitch />
          <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;