import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Team from '../components/Team'
import BentoGridSection from '../components/BentoGridSection'
import FeatureSection from '../components/FeatureSection'

const Home = () => {
  return (
    <div className='font-lato'>
      <Hero />
      <Team />
      <BentoGridSection />
      <FeatureSection />
    </div>
  )
}

export default Home
