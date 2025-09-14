import React, { useState } from "react";
import Container from "../layout/Container/Container";
import logo from "../../assets/logo.png";
import Flex from "../layout/Flex/Flex";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart, CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger menu

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = ["Home", "Contact", "About", "Sign Up"];

  return (
    <nav className="shadow-sm bg-white/90 backdrop-blur-md sticky top-0 z-50">
      <Container>
        <Flex className="items-center justify-between py-3">
          {/* Logo */}
          <div className="w-3/12">
            <img src={logo} alt="Logo" className="max-h-12" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block w-6/12">
            <ul className="font-primary flex justify-center gap-8 font-medium text-gray-700">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="relative cursor-pointer hover:text-indigo-600 transition group"
                >
                  {item}
                  {/* underline hover animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - Search & Icons */}
          <Flex className="items-center gap-4 w-3/12 justify-end">
            {/* Search bar */}
            <div className="hidden md:flex items-center border rounded-full px-3 py-1 bg-gray-50">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm font-primary w-32"
              />
              <CiSearch className="text-xl text-gray-500 hover:text-indigo-600 cursor-pointer hover:scale-110 transition-transform" />
            </div>

            {/* Icons */}
            <CiHeart className="text-2xl cursor-pointer hover:text-indigo-600 hover:scale-110 transition-transform" />
            <MdOutlineShoppingCart className="text-2xl cursor-pointer hover:text-indigo-600 hover:scale-110 transition-transform" />

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <HiX /> : <HiMenu />}
            </button>
          </Flex>
        </Flex>

        {/* Mobile Menu Dropdown */}
        {mobileOpen && (
          <div className="md:hidden mt-3 bg-gray-50 rounded-lg p-4 shadow">
            <ul className="flex flex-col items-center gap-4 font-primary font-medium text-gray-700">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-indigo-600 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center border rounded-full px-3 py-1 bg-white">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm font-primary w-full"
              />
              <CiSearch className="text-xl text-gray-500 hover:text-indigo-600 cursor-pointer" />
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
