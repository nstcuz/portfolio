import React, { useState } from 'react';

const Header = () => {
const [hamburgerOpen, setHamburgerOpen] = useState(null);

const toggleHamburger = () => {
  setHamburgerOpen(!hamburgerOpen);
}





  return (
    <header data-theme="pastel" className="fixed w-[95%] top-0 left-0 right-0 z-10 flex justify-center items-center mt-3 mx-auto bg-transparent">
      <nav className="h-10 flex justify-between items-center w-full border-2 border-solid border-softBlack rounded-full bg-base-100 bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 bg-transparent">
        <div className="flex justify-center items-center text-xl font-IBMPlex ml-4">
            <span className='bg-primary size-4 rounded-full inline-block mr-2'>&nbsp;</span>
            <span className='bg-secondary size-4 rounded-full inline-block mr-2'>&nbsp;</span>
            <span className='bg-accent size-4 rounded-full inline-block mr-2'>&nbsp;</span>
            <span className=' bg-neutral size-4 rounded-full inline-block mr-2'>&nbsp;</span>
        </div>
      <div className='flex justify-evenly items-center '>
        <label className="swap swap-rotate mr-2">
          <input type="checkbox" />
          {/* sun icon */}
          <svg className="swap-on fill-current size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
          {/* moon icon */}
          <svg className="swap-off fill-current size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
        </label>
        <a href="#" className='mr-6'>
        <svg className="size-6" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z" fillRule="nonzero" stroke="currentColor" strokeWidth="1"/>
        </svg>
        <ul className='hidden'>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        </a>
      </div>
      </nav>
    </header>
  );
};

export default Header;