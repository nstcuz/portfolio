import React, { useEffect, useState } from 'react';
import anime from 'animejs';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      const translateDistance = window.innerWidth < 768 ? 48 : 96;
      anime({
        targets: '.navItem-ajs',
        translateX: translateDistance,
        delay: anime.stagger(400),
        duration: 3000,
      });
    }
  }, [isOpen]);

  return (
    <div>
      {/* mobile nav */}
      <div className="relative right-4 top-0 md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none mt-2">
          <svg className="w-6 h-6 fill-neutral-content" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z" fillRule="nonzero" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </button>
        {isOpen && (
          <div className="fixed z-50 left-[-1.3rem] top-[-3.5rem] mt-2 h-heightForNav w-widthForNav backdrop-filter bg-clip-padding backdrop-blur-2xl bg-opacity-20 bg-base-100"> {/* weird top and left values to adjust for list margins */}
            <ul className="h-full w-full flex flex-col justify-center items-center">
              <div className="w-[85%] h-[55%] flex flex-col justify-center items-center bg-base-200 hover:bg-base-200 rounded-3xl shadow-xl">
              <img className="size-12 absolute top-72 right-20 cursor-pointer" 
                   src="src/assets/close-button.svg" 
                   alt="X close button"
                   onClick={toggleMenu} />
                <li className="navItem-ajs relative py-4 ml-0 my-6 w-full text-3xl font-UbuntuMono list-none cursor-pointer">
                  <span className="inline-flex get-down">About</span>
                  <img className="size-10 inline-flex absolute right-24" src="src/assets/right-arrow.svg" alt="an arrow pointing right" />
                </li>
                <li className="navItem-ajs relative py-4 ml-0 my-6 w-full text-3xl font-UbuntuMono list-none cursor-pointer">
                  <span className="inline-flex get-down">Projects</span>
                  <img className="size-10 inline-flex absolute right-24" src="src/assets/right-arrow.svg" alt="an arrow pointing right" />
                </li>
                <li className="navItem-ajs relative py-4 ml-0 my-6 w-full text-3xl font-UbuntuMono list-none cursor-pointer">
                  <span className="inline-flex get-down">Contact</span>
                  <img className="size-10 inline-flex absolute right-24" src="src/assets/right-arrow.svg" alt="an arrow pointing right" />
                </li>
              </div>
            </ul>
          </div>
        )}
      </div>

      {/* desktop nav */}
      <div className="hidden md:flex justify-end items-center space-x-4">
        <a href="#about" className="text-xl text-neutral-content">About</a>
        <a href="#projects" className="text-xl text-neutral-content">Projects</a>
        <a href="#contact" className="text-xl text-neutral-content">Contact</a>
      </div>
    </div>
  );
};

export default HamburgerMenu;