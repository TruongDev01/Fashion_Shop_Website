import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Hoặc 'auto' nếu muốn nhảy ngay lập tức
        });
    };
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* Left section */}
                <div>
                    <img src={assets.logo} alt="logo" className='w-32 mb-5' />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Forever is your go-to destination for trendsetting fashion and timeless staples. We are dedicated to bringing you the best in style, quality, and value.
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-500'>
                        <li>
                            <NavLink to='/' onClick={scrollToTop} className='cursor-pointer hover:text-black'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' onClick={scrollToTop} className='cursor-pointer hover:text-black'>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/' onClick={scrollToTop} className='cursor-pointer hover:text-black'>
                                Delivery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/' onClick={scrollToTop} className='cursor-pointer hover:text-black'>
                                Privacy Policy
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+84 921-020-05</li>
                        <li>truongdao@forever.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center '>Copyright 2025@forever.com - All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
