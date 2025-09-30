import React from "react";
import Title from "../components/Title/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox/NewsLetterBox";

const Contact = () => {
  return (
    <div className="pt-10 border-t px-6 sm:px-12 lg:px-20">
      {/* Title */}
      <div className="text-center text-3xl font-bold">
        <Title text1={"CONTACT "} text2={"US"} />
        <p className="text-gray-500 text-sm mt-2">
          Get in touch with us for any questions or support.
        </p>
      </div>

      {/* Contact Section */}
      <div className="my-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg">
          <img
            src={assets.contact_img}
            alt="Contact Us"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Side - Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 text-gray-700">
          {/* Store Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Our Store</h3>
            <p className="mt-2 leading-relaxed">
              54709 Wukkns Stauib <br /> Suite 350, Washington, USA
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Contact Info</h3>
            <p className="mt-2">📞 01766366638</p>
            <p>📧 sourovkarmokar22@gmail.com</p>
          </div>

          {/* Careers */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Careers at Forever
            </h3>
            <p className="mt-2">
              Learn more about our team and explore exciting opportunities.
            </p>
            <a
              href="#jobs"
              className="mt-4 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Explore Jobs →
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-16">
        <NewsLetterBox />
      </div>
    </div>
  );
};

export default Contact;
