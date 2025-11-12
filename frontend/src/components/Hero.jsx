import React from 'react'
import { assets } from '../assets/assets'
const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* Left section */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>

                {/* KHỐI NỘI DUNG CHÍNH: Cần sử dụng flex-col để xếp chồng */}
                <div className='text-[#414141]'>

                    {/* 1. BESTSELLERS */}
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'> OUR BESTSELLERS</p>
                    </div>

                    {/* 2. LATEST ARRIVALS */}
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
                        Latest Arrivals
                    </h1>

                    {/* 3. SHOP NOW */}
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-px bg-[#414141]'></p>
                    </div>

                </div>
            </div>
            {/* Right section */}
            <img className='w-full sm:w-1/2' src={assets.hero_img} alt="heroImage" />
        </div>
    )
}

export default Hero
