import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Banner from './components/Banner';
import LiveAICoach from './components/LiveAiCoach';
import blueEffect from "../../assets/Rectangle 23823.png"

const Home = () => {
  return (
    <div className='font-manrope'>
      <div className="absolute pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue rounded-full blur-[150px]"></div>
        
      </div>
      <header className='relative'>
        <div className='fixed w-full top-0 z-10 backdrop-blur-2xl'>
          <Navbar></Navbar>
        </div>
        <Banner />
      </header>
      <div>
        <LiveAICoach/>
      </div>
    <div className='relative bg-gray-100 mt-14'>
    <div className='absolute bottom-0 left-0 container'>
      <img src={blueEffect} alt="" />
    </div>
      <Footer/>
    </div>
    </div>
  )
}

export default Home;