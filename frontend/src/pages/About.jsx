import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets';
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop for fashion. Starting as a small boutique, we have come a long way, evolving into a global brand that delivers the latest trends right to your doorstep.</p>
          <p>We believe that fashion is more than just clothing; it is an expression of your personality. That is why we work tirelessly to curate collections that are not only stylish but also comfortable and affordable, ensuring you always look your best.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Forever is to empower individuals to look and feel their best. We are committed to providing high-quality fashion that is accessible to everyone, while fostering a community of style enthusiasts who value creativity and authenticity.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>We meticulously select and inspect every product to ensure it meets our high standards. From fabric selection to the final stitch, we prioritize durability and comfort so you can wear our pieces with confidence.</p>

        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinience: </b>
          <p className='text-gray-600'>With our user-friendly website and streamlined checkout process, shopping has never been easier. We offer fast shipping and hassle-free returns to ensure a smooth experience from browsing to unboxing.</p>

        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Our dedicated support team is here for you 24/7. Whether you have a question about a size, need styling advice, or require assistance with an order, we are always ready to help with a smile.</p>

        </div>
      </div>
    </div>
  )
}

export default About
