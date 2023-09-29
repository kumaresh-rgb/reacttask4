import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-100/80 font-sans dark:bg-gray-900 py-16">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe our newsletter to get an update.</h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button
                className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="footer-link-section">
            <QuickLinks />
          </div>

          <div className="footer-link-section">
            <Industries />
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-1 gap-4 hover:cursor-pointer">
            <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="" />
            <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="" />
          </div>

          <div className="flex gap-4 hover:cursor-pointer">
            <SocialIcons />
          </div>
        </div>
        <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">© 2023 You Company Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

const QuickLinks = () => {
  const links = ["Home", "Who We Are", "Our Philosophy"];

  return (
    <>
      <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>
      <div className="flex flex-col items-start mt-5 space-y-2">
        {links.map((link, index) => (
          <p
            key={index}
            className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
          >
            {link}
          </p>
        ))}
      </div>
    </>
  );
};

const Industries = () => {
  const industries = ["Retail & E-Commerce", "Information Technology", "Finance & Insurance"];

  return (
    <>
      <p className="font-semibold text-gray-800 dark:text-white">Industries</p>
      <div className="flex flex-col items-start mt-5 space-y-2">
        {industries.map((industry, index) => (
          <p
            key={index}
            className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
          >
            {industry}
          </p>
        ))}
      </div>
    </>
  );
};

const SocialIcons = () => {
  return (
    <div className="flex gap-4   hover:cursor-pointer">
      <FaFacebook className="text-2xl text-white" />
      <FaTwitter className="text-2xl text-white" />
      <FaInstagram className="text-2xl text-white" />
      <FaGithub className="text-2xl text-white" />
      <FaLinkedin className="text-2xl text-white" />
      <FaDribbble className="text-2xl text-white" />
    </div>
  );
};



export default Footer;
