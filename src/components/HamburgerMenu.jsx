import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // console.log(isOpen);
    document.getElementsByTagName('header');
  };

  return (
    <div className="absolute right-4 top-0">
      <button onClick={toggleMenu} className="focus:outline-none mt-2">
        <svg className="size-6 fill-neutral-content" 
            clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z" fillRule="nonzero" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </button>
      {isOpen && (
        <ul className="fixed z-50 left-0 top-[-0.5rem] mt-2 w-screen h-screen bg-neutral">
          <li className="relative top-[30%] px-4 py-2 hover:bg-gray-200">About</li>
          <li className="relative top-[35%] px-4 py-2 hover:bg-gray-200">Projects</li>
          <li className="relative top-[40%] px-4 py-2 hover:bg-gray-200">Contact</li>
          <li><a href="/music">Go to Music</a></li>

        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;