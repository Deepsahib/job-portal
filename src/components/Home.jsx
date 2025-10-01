import React from 'react'
import Navbar from './Navbar'
import HeroSection from './Herosection'
import Category from './Category'
import LatestJobs from './Latestjobs'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Category/>
    <LatestJobs/>
    <Footer/>
    </>
  )
}

export default Home