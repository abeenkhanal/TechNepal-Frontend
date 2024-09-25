import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-footer-text font-sans text-white dark:bg-gray-900 mt-2">
        <div className="container px-4 py-12 mx-auto sm:px-6 md:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1 className="text-xl font-bold tracking-tight text-white xl:text-2xl dark:text-white">
                Stay Updated with Our Newsletter
              </h1>

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="emailAddress"
                  type="email"
                  className="w-full px-4 py-2 text-black bg-gray-100 border rounded-md shadow-lg focus:ring focus:ring-opacity-50 focus:ring-blue-400 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  placeholder="Enter your email"
                />

                <button className="w-full px-6 py-2.5 mt-4 text-sm font-bold text-white transition-transform duration-300 transform bg-blue-600 rounded-lg md:w-auto md:mt-0 md:mx-4 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 shadow-lg hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p className="font-semibold text-lg text-white">
                Quick Links
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link to={''} className="text-gray-300 hover:text-white hover:underline transition duration-300">
                  Home
                </Link>
                <Link to={'/about'} className="text-gray-300 hover:text-white hover:underline transition duration-300">
                  About Us
                </Link>
                <Link to={'/team'} className="text-gray-300 hover:text-white hover:underline transition duration-300">
                  Team
                </Link>
                <Link to={'/contact'} className="text-gray-300 hover:text-white hover:underline transition duration-300">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-lg text-white">
                Gadgets
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-300 hover:text-white hover:underline transition duration-300 cursor-pointer">
                  Two Wheelers
                </p>
                <p className="text-gray-300 hover:text-white hover:underline transition duration-300 cursor-pointer">
                  Four Wheelers
                </p>
                <p className="text-gray-300 hover:text-white hover:underline transition duration-300 cursor-pointer">
                  Electronics
                </p>
              </div>
            </div>
          </div>

          <hr className="my-8 border-gray-600 dark:border-gray-700" />

          <div className="flex flex-col sm:flex-row sm:justify-between items-center">
            <div className="flex space-x-4">
              <img
                src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                className="w-32 h-12 sm:w-40 transform hover:scale-105 transition duration-300"
                alt="Google Play"
              />
              <img
                src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                className="w-32 h-12 sm:w-40 transform hover:scale-105 transition duration-300"
                alt="App Store"
              />
            </div>

            <div className="flex mt-4 sm:mt-0 space-x-6">
              <img
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                className="w-8 h-8 sm:w-10 sm:h-10 transform hover:scale-110 transition duration-300"
                alt="Facebook"
              />
              <img
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                className="w-8 h-8 sm:w-10 sm:h-10 transform hover:scale-110 transition duration-300"
                alt="Twitter"
              />
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                className="w-8 h-8 sm:w-10 sm:h-10 transform hover:scale-110 transition duration-300"
                alt="Instagram"
              />
              <img
                src="https://www.svgrepo.com/show/28145/linkedin.svg"
                className="w-8 h-8 sm:w-10 sm:h-10 transform hover:scale-110 transition duration-300"
                alt="LinkedIn"
              />
            </div>
          </div>

          <p className="font-sans mt-8 sm:mt-4 p-4 text-center text-sm md:text-lg dark:text-gray-400">
            © 2023 TECHNEPAL | All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        .bg-footer-bg {
            background-color: #e7e9ed;
          }
      `}</style>
    </div>
  );
};

export default Footer;
