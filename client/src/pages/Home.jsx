import React from 'react'
import Navbar from '../components/Navbar'
import BottomNavbar from '../components/BottomNavbar';
import HomeCard from '../components/HomeCard';
import Graphslide from '../components/Graphslide';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='flex justify-center p-3 mt-4'>
      <HomeCard/>
    </div>
    {/* <Graphslide/> */}
    <BottomNavbar />
    </>
  )
}

export default Home
