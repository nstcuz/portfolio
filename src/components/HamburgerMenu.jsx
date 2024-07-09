import React, { useEffect, useState } from 'react';
import anime from 'animejs';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      const childWidth = 2;
      anime({
        targets: '.navItem-ajs',
        translateX: childWidth,
        delay: anime.stagger(400),
        duration: 3000,
      });
    }
  }, [isOpen]);

  return (
    <div>
      {/* mobile nav */}
      <div className="relative right-4">
        <button onClick={toggleMenu} className="mt-2">
          <svg className="fill-neutral-content size-6 sm:size-7 md:size-8 " 
               clipRule="evenodd" 
               fillRule="evenodd" 
               strokeLinejoin="round" 
               strokeMiterlimit="2" 
               viewBox="0 0 24 24" 
               xmlns="http://www.w3.org/2000/svg">
            <path d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z" fillRule="nonzero" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </button>
        {isOpen && (
          <div onClick={toggleMenu} className="fixed left-[-1.3rem] top-[-3.5rem] mt-2 h-heightForNav w-widthForNav backdrop-blur-xl bg-neutral-content bg-opacity-80 border-opacity-30 rounded-xl shadow-lg">
            <ul className="nav-animation h-full w-full flex flex-col justify-center items-center">
              <div className="w-[85%] h-[55%] flex flex-col justify-center items-center bg-info rounded-3xl shadow-xl">
                <nav>
                  <li className="navItem-ajs relative py-4 ml-0 my-6 w-full text-3xl font-UbuntuMono list-none cursor-pointer">
                    <p className="inline-flex border-b-2 border-b-transparent hover:border-primary hover:transform">About</p>
                    {/* <img className="size-10 absolute right-0" src="src/assets/right-arrow.svg" alt="an arrow pointing right" /> */}
                  </li>
                  <li className="navItem-ajs relative py-4 ml-0 my-6 w-full text-3xl font-UbuntuMono list-none cursor-pointer">
                    <p className="inline-flex border-b-2 border-b-transparent hover:border-primary hover:transform">Projects</p>
                    {/* <img className="size-10 absolute right-20" src="src/assets/right-arrow.svg" alt="an arrow pointing right" /> */}
                  </li>
                  <li className="navItem-ajs relative py-4 ml-0 my-6 w-full text-3xl font-UbuntuMono list-none cursor-pointer">
                    <p className="inline-flex border-b-2 border-b-transparent hover:border-primary hover:transform">Contact</p>
                    {/* <img className="size-10 absolute right-20" src="src/assets/right-arrow.svg" alt="an arrow pointing right" /> */}
                  </li>
                  <img className="size-12 absolute top-72 right-20 cursor-pointer" 
                      src="src/assets/close-button.svg" 
                      alt="X close button" />
                </nav>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;