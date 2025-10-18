import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='relative overflow-hidden bg-gray-900 h-[60vh] sm:h-[70vh] rounded-lg mt-4 sm:mt-6 mx-2 sm:mx-4'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0'>
        <img 
          src={assets.hero_img} 
          alt="Hero Background"
          className='w-full h-full object-cover object-center scale-105 transform hover:scale-110 transition-transform duration-700'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent'></div>
      </div>

      {/* Content */}
      <div className='relative h-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center'>
        <div className='text-white max-w-xl'>
          <div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6'>
            <div className='w-8 sm:w-12 h-[2px] bg-white/70'></div>
            <p className='text-white/70 uppercase tracking-wider text-xs sm:text-sm font-medium'>
              Premium Collection
            </p>
          </div>
          
          <h1 className='prata-regular text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6'>
            Step into <span className='text-yellow-400'>Luxury</span><br />
            Walk in <span className='text-yellow-400'>Style</span>
          </h1>
          
          <p className='text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-md'>
            Discover our latest collection of premium footwear, crafted for comfort and designed for distinction.
          </p>
          
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
            <a href="/collection" className='w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-black bg-white rounded-lg hover:bg-yellow-400 transition-colors duration-300'>
              Shop Collection
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/about" className='w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-white border border-white rounded-lg hover:bg-white/10 transition-colors duration-300'>
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className='absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-t from-yellow-400/20 via-yellow-400/10 to-transparent rounded-tl-full'></div>
    </div>
  )
}

export default Hero