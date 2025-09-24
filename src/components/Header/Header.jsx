import React from 'react'
import Container from '../layout/Container/Container'
import Flex from '../layout/Flex/Flex'
import { PiGreaterThan } from "react-icons/pi";

const Header = () => {
  return (
    <div>
      <Container className="py-10">
        <Flex className='justify-between'>
          <div>
            <ul className="space-y-4">
              <li className="flex items-center justify-between font-poppins font-normal text-base leading-6 text-black cursor-pointer hover:text-red-500 transition duration-200 md:text-lg">
                Woman’s Fashion
                <PiGreaterThan className="text-sm ml-[50px]" />
              </li>
              <li className="flex items-center justify-between font-poppins font-normal text-base leading-6 text-black cursor-pointer hover:text-red-500 transition duration-200 md:text-lg">
                Men’s Fashion
                <PiGreaterThan className="text-sm ml-[50px]" />
              </li>
              <li className="flex items-center justify-between font-poppins font-normal text-base leading-6 text-black cursor-pointer hover:text-red-500 transition duration-200 md:text-lg">
                Electronics
              </li>
              <li className="flex items-center justify-between font-poppins font-normal text-base leading-6 text-black cursor-pointer hover:text-red-500 transition duration-200 md:text-lg">
                Home & Lifestyle
              </li>
              <li className="flex items-center justify-between font-poppins font-normal text-base leading-6 text-black cursor-pointer hover:text-red-500 transition duration-200 md:text-lg">
                Medicine
              </li>
              <li className="flex items-center justify-between font-poppins font-normal text-base leading-6 text-black cursor-pointer hover:text-red-500 transition duration-200 md:text-lg">
                Sports & Outdoor
              </li>
              <li className="flex items-center justify-between font-poppins font-normal text-base leading-6 text-black cursor-pointer hover:text-red-500 transition duration-200 md:text-lg">
                Baby’s & Toys
              </li>
              <li className="flex items-center justify-between font-poppins font-normal text-base leading-6 text-black cursor-pointer hover:text-red-500 transition duration-200 md:text-lg">
                Groceries & Pets
              </li>
              <li className="flex items-center justify-between font-poppins font-normal text-base leading-6 text-black cursor-pointer hover:text-red-500 transition duration-200 md:text-lg">
                Health & Beauty
              </li>
            </ul>
          </div>

          <div>ffj</div>
        </Flex>
      </Container>

    </div>
  )
}

export default Header
