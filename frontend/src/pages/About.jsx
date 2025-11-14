import React from 'react'
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-start pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] rounded-lg' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Forever Website, your ultimate destination for premium, stylish footwear designed to elevate every step you take. Founded with a passion for quality and fashion, we curate an exclusive collection of sneakers, casual shoes, and sports footwear from top brands, ensuring you find the perfect pair to match your lifestyle.</p>
          <p>At Our Website, customer satisfaction is our top priority. We are committed to delivering exceptional service, quick delivery, and hassle-free shopping experiences. Join our community of shoe lovers who trust us for the latest designs and unbeatable quality.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to blend comfort, trend, and performance, offering shoes that not only look great but feel incredible. Whether you’re hitting the gym, the streets, or simply stepping out in style, we provide footwear that supports and inspires your journey.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 rounded-xl'>
        <div className='border px-10 md:px-16 py-8 sm:py-15 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Crafted with care and precision, our shoes combines premium materials and exceptional craftsmanship to deliver timeless quality you can trust.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-15 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Fashion at your fingertips—shop effortlessly anytime, anywhere with our seamless online experience and fast, reliable delivery.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-15 flex flex-col gap-5'>
          <b>Exceptional customer Service:</b>
          <p className='text-gray-600'>We’re dedicated to providing a seamless shopping experience, with personalized support and service to ensure your satisfaction every step of the way.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About