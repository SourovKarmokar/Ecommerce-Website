import React from 'react'
import Title from '../components/Title/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from "../components/NewsLetterBox/NewsLetterBox"

const About = () => {
  return (
    <div>
      {/* About Us */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'} />

        <div className='my-10 flex flex-col md:flex-row gap-16 items-center px-6'>
          {/* Image with hover effect */}
          <div className='overflow-hidden rounded-lg shadow-md md:w-1/2'>
            <img 
              src={assets.about_img} 
              alt="About us" 
              className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
            />
          </div>

          {/* Text content */}
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-base leading-relaxed'>
            <p>
              Welcome to <span className="font-semibold text-gray-800">ShopEase</span>, 
              your one-stop destination for quality products and a seamless shopping experience. 
              We are committed to bringing you the latest trends at the best prices.
            </p>
            <p>
              Our journey started with a simple idea – to make shopping easy, fun, and accessible 
              for everyone. Whether you are looking for fashion, lifestyle, or everyday essentials, 
              we have something for you.
            </p>
            <p>
              With fast delivery, secure payment options, and 24/7 customer support, 
              we ensure that your shopping journey with us is smooth and worry-free.
            </p>
            <b className="text-lg text-gray-800">Our Mission</b>
            <p>
              To create a trusted platform where customers can shop with confidence, 
              knowing they will receive high-quality products, fast delivery, and exceptional service every time.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='text-xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-6 px-6'>
        {/* Card 1 */}
        <div className='border px-8 py-12 flex flex-col gap-4 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
          <b className='text-lg text-gray-800'>Quality Assurance</b>
          <p className='text-gray-600'>
            We carefully select and inspect every product to ensure it meets the highest quality standards, 
            so you always get the best.
          </p>
        </div>

        {/* Card 2 */}
        <div className='border px-8 py-12 flex flex-col gap-4 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
          <b className='text-lg text-gray-800'>Convenience</b>
          <p className='text-gray-600'>
            From browsing to checkout, our platform is designed to give you a smooth and 
            hassle-free shopping experience anytime, anywhere.
          </p>
        </div>

        {/* Card 3 */}
        <div className='border px-8 py-12 flex flex-col gap-4 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
          <b className='text-lg text-gray-800'>Exceptional Customer Service</b>
          <p className='text-gray-600'>
            Our support team is here 24/7 to help with any questions or issues, 
            ensuring your satisfaction every step of the way.
          </p>
        </div>
      </div>

      {/* Newsletter */}
      <NewsLetterBox/>
    </div>
  )
}

export default About
