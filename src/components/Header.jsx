import React from 'react';
import DarkModeSwitch from './DarkMode';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {

  return (
    <header className="fixed w-[95%] top-0 left-0 right-0 z-10 flex justify-center items-center mt-3 mx-auto bg-transparent">
      <nav className="h-10 flex justify-between items-center w-full border-2 border-neutral-content rounded-full bg-base-100 backdrop-filter backdrop-blur-md bg-opacity-30 ">
        <div className="flex justify-center items-center text-xl font-IBMPlex ml-4">
            <span className='bg-primary size-4 rounded-full inline-block mr-2'>&nbsp;</span>
            <span className='bg-secondary size-4 rounded-full inline-block mr-2'>&nbsp;</span>
            <span className='bg-accent size-4 rounded-full inline-block mr-2'>&nbsp;</span>
            <span className=' bg-neutral size-4 rounded-full inline-block mr-2'>&nbsp;</span>
        </div>
      <div className='flex justify-evenly items-center bg-transparent'>
          <DarkModeSwitch />
      </div>
      </nav>
        <a href="#" className=''>
          <HamburgerMenu />
        </a>
    </header>
  );
};

export default Header;