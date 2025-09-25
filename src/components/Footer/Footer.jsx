import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 mt-40">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 px-6 py-12 text-sm">
        
        {/* Logo + About */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iure, esse. We bring you quality products with the best service.
          </p>
        </div>

        {/* Company Links */}
        <div className="text-center sm:text-left" >
          <p className="text-lg font-semibold mb-5 text-gray-900">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li><a href="/" className="hover:text-black transition">Home</a></li>
            <li><a href="/about" className="hover:text-black transition">About Us</a></li>
            <li><a href="/delivery" className="hover:text-black transition">Delivery</a></li>
            <li><a href="/privacy" className="hover:text-black transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold mb-5 text-gray-900">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li><a href="tel:+8801766366638" className="hover:text-black transition">01766366638</a></li>
            <li><a href="mailto:sourovkarmokar22@gmail.com" className="hover:text-black transition">sourovkarmokar22@gmail.com</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <p className="py-5 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} forever.com — All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
