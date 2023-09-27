import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/react.svg'


function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Define your navigation links in an array for easier management
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact", label: "Contact" },
    {to:"/Users",label:"Users"}
  ];

  return (
    <header className="bg-gray-800 z-50">
      <nav className="container mx-auto flex items-center justify-between py-1">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white ml-4 text-lg font-semibold">
            <img src={logo} alt="Logo" className="w-9 h-9" />
          </Link>
          {/* Use map to generate navigation links */}
          <div className="hidden md:flex md:px-9 space-x-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="text-white font-medium  hover:text-gray-300 transition duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="md:hidden md:mt-2 px-4">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-300 transition duration-300"
          >
            {showMobileMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            showMobileMenu ? "block" : "hidden"
          } md:hidden absolute top-16 right-2 shadow-lg mt-2 mx-5  py-7 px-4 rounded-lg cursor-pointer bg-white w-40 text-black z-10 `}
        >
          <ul className="text-center space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="block py-2 hover:bg-gray-700 transition duration-300"
                  onClick={toggleMobileMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
