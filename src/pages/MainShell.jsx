import React from 'react';
import Home from '../components/Home';
import MainContent from './MainContent';

function MainShell(){

  return (
    <main className='relative flex flex-col justify-center items-center w-[95%] mx-auto mt-16 text-center overflow-hidden rounded-3xl'> 
      <Home />
      <MainContent/>

    </main>
  );
}

export default MainShell;