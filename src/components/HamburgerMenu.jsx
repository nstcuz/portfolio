import React, { useEffect, useState } from 'react';
import anime from 'animejs';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      const childWidth = 4;
      anime({
        targets: '.navItem-ajs',
        translateX: childWidth,
        delay: anime.stagger(600),
        duration: 3000,
      });
    }
  }, [isOpen]);

  return (
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
          <div onClick={toggleMenu} className="nav-animation absolute right-[-60px] w-[280px] flex flex-col">
              <nav className="absolute w-screen h-96 mt-[3px] flex flex-col justify-center items-center rounded-bl-3xl bg-base-100 backdrop-filter backdrop-blur-md bg-opacity-80 shadow-xl border-2 border-b-neutral-content border-l-neutral-content border-t-0">

                  <a href="#project-anchor" className="navItem-ajs relative py-4 ml-24 my-6 w-full text-3xl font-UbuntuMono list-none cursor-pointer">
                    <p className="inline-flex border-b-2 border-b-transparent mr-[100px] hover:border-primary hover:transform">Projects</p>
                    <svg className='size-10 absolute inline-block fill-neutral-content'
                         clip-rule="evenodd" 
                         fill-rule="evenodd" 
                         stroke-linejoin="round" 
                         stroke-miterlimit="2" 
                         viewBox="0 0 24 24" 
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" fill-rule="nonzero"/>
                    </svg>
                  </a>
                  <a href="#about-anchor" className="navItem-ajs relative py-4 ml-24 my-6 w-full text-3xl font-UbuntuMono list-none cursor-pointer ">
                    <p className="inline-flex border-b-2 border-b-transparent mr-[114px] md:mr-[118px] xl:mr-[120px] hover:border-primary hover:transform">About</p>
                    <svg className='size-10 absolute inline-block fill-neutral-content'
                         clip-rule="evenodd" 
                         fill-rule="evenodd" 
                         stroke-linejoin="round" 
                         stroke-miterlimit="2" 
                         viewBox="0 0 24 24" 
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" fill-rule="nonzero"/>
                    </svg>
                  </a>
                  <a href="#contact" className="navItem-ajs relative py-4 ml-24 my-6 w-full text-3xl font-UbuntuMono list-none cursor-pointer">
                    <p className="inline-flex border-b-2 border-b-transparent mr-[100px] hover:border-primary hover:transform">Contact</p>
                    <svg className='size-10 absolute inline-block fill-neutral-content'
                         clip-rule="evenodd" 
                         fill-rule="evenodd" 
                         stroke-linejoin="round" 
                         stroke-miterlimit="2" 
                         viewBox="0 0 24 24" 
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" fill-rule="nonzero"/>
                    </svg>
                  </a>
              </nav>
          </div>
        )}
      </div>
  );
};

export default HamburgerMenu;