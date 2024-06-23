import React from 'react'
import MainPage from './pages/MainPage'
import Header from './components/Header' 
// import About from './components/About' 

function App() {

  return (
    <>
    <div className='site-wrapper'>
      <Header />
      <MainPage />
    </div>
    </>
  )
}

export default App