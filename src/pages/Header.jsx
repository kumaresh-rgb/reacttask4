import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai"; // Register icon
import { AiOutlineLogin } from "react-icons/ai"; // Login icon



function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/Theme", label: "Theme" },
    { to: "/Developer", label: "Developers" },
    { to: "/Pricing", label: "Pricing" },
    { to: "/Blogs", label: "Blog" },
    { to: "/About", label: "About Us" },
    { to: "/Register", label: "Register", icon: <AiOutlineUserAdd /> }, // Add Register link with icon
    { to: "/Login", label: "Login", icon: <AiOutlineLogin /> }, // Add Login link with icon
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-slate-100 backdrop-blur-3xl shadow-md ">
      <nav className="container flex justify-between md:justify-around py-1.5 px-8 md:px-3 items-center">
        <div className="flex items-center">
          <a className="cursor-pointer">
            <h3 className="text-2xl font-medium text-blue-500">
            <Link to="/">
              <img
                className="h-10"
                src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
                alt="Store Logo"
              />
              </Link>
            </h3>
          </a>
        </div>

        {/* Mobile Menu Icon (Always Visible) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden md:mt-2 px-4 text-2xl text-black hover:text-gray-300 transition duration-300"
        >
          {showMobileMenu ? (
            <AiOutlineClose />
          ) : (
            <HiOutlineMenuAlt3 />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            showMobileMenu ? "block" : "hidden"
          } md:hidden absolute top-16 right-2 shadow-lg mt-2 mx-5 py-7 px-4 rounded-lg cursor-pointer bg-white w-40 text-black z-10`}
        >
          <ul className="text-center space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="flex items-center justify-center  py-2 hover:bg-gray-700 transition duration-300"
                  onClick={toggleMobileMenu}
                >
                  {link.icon && <span className="mr-1">{link.icon}</span>}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Render navLinks based on screen size */}
        <div className="hidden md:flex md:space-x-10 justify-center justify-items-start md:justify-items-center md:pt-2 w-full left-0 top-0 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="flex text-gray-600 font-medium hover:text-blue-500 cursor-pointer transition-colors duration-300 items-center"
            >
              {link.icon && <span className="mr-1">{link.icon}</span>}
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
