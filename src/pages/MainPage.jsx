import React from 'react';
import Home from '../components/Home';
// import About from '../components/About';

function MainPage() {


  return (
    <main data-theme="pastel" className='relative flex flex-col justify-center items-center w-[95%] mx-auto mt-16 text-center overflow-hidden border-solid border-2 border-softBlack rounded-3xl'> 
      <Home />

    </main>
  );
}

export default MainPage;