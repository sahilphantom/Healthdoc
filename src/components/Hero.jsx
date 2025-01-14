import React from 'react'
import { img1 } from '../assets/image'

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
    {/* Background Rings */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-500/30" />
      <div className="absolute top-20 -right-20 h-[300px] w-[300px] rounded-full bg-green-500/20" />
      <div className="absolute bottom-40 left-60 h-[200px] w-[200px] rounded-full bg-blue-500/20" />
      <div className="absolute -bottom-20 right-40 h-[400px] w-[400px] rounded-full bg-purple-400/20" />
    </div>

    {/* Content Container */}
    <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-4 lg:px-8" >
      <div className="flex flex-col items-center text-center lg:space-y-12">
        {/* Text Content */}
        <div className="max-w-2xl lg:max-w-6xl">
            <p className="mb-3 text-lg text-gray-500 max-sm:absolute top-[30px] left-[7.8rem]">Ai Generation 5.0</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-8xl">
            A powerful virtual
            <span className="relative inline-block">
              assistant
              <span className="absolute -right-4 -top-1 text-purple-600">*</span>
            </span>
            <br />
            with
            <span className="relative inline-block ml-2">
              <span className="absolute -left-4 top-0 text-purple-600">+</span>
              AI Powered
            </span>
          </h1>
          
          <p className="mt-6 text-lg text-gray-500">
            Collaborate with technology that transforms your aspirations into exceptional results, seamlessly and effectively
          </p>

          {/* Mobile Download Button */}
          <div className="mt-8 ">
            <button className="rounded-full bg-[#7c3aed] px-6 py-3 text-white hover:bg-[#6d28d9] transition-colors">
              Download App
            </button>
          </div>
        </div>

       

          {/* Mobile Device */}
        
          <div className="relative mx-auto max-w-[320px] md:mt-6 sm:mt-6 max-sm:mt-8">
      <img
        src={img1} // Use the image path directly
        alt="HealthDoc App Interface"
        className="relative z-10"
        style={{ height: '550px', width: '450px' }} // Resizing via inline styles
      />
   
            
            {/* Image Background Effects */}
            <div className="absolute -top-4 -bottom-4 -left-4 -right-4 bg-gradient-to-r from-purple-500/50 to-transparent rounded-3xl" />
            <div className="absolute -top-2 -bottom-2 -left-2 -right-2 bg-gradient-to-l from-green-500/30 to-transparent rounded-3xl" />
          </div>
         
            
        </div>
      </div>
          {/* Additional Background Rings */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="h-[600px] w-[600px] rounded-full border border-purple-500/40" />
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-100/40" />
      <div className="absolute top-1/2 left-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-100/40" />
    </div>
  </div>
    
  )
}

export default Hero
