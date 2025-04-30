import React from 'react'
import Navbar from '../Shared/Navbar';
import Banner from './components/Banner';

const Home = () => {
  return (
    <div className='font-manrope'>
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue rounded-full blur-[150px]"></div>
        
      </div>
      <header className='relative'>
        <div className='fixed w-full top-0 z-10 backdrop-blur-2xl'>
          <Navbar></Navbar>
        </div>
        <Banner />
      </header>
    </div>
  )
}

export default Home;