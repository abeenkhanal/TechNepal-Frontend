import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchProfile, logOut } from "../../../store/authSlice";
import { fetchCartItems } from "../../../store/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);
  const { data: user } = useSelector((state) => state.auth);

  const [ShowTime, setShowTime] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowTime(true);
      } else {
        setShowTime(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem("token");
    navigate("/login");
    setIsMenuOpen(false); // Close menu after logout
  };

  useEffect(() => {
    dispatch(fetchCartItems());
    dispatch(fetchProfile());
  }, [dispatch]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close the menu after navigating
  };

  return (
    <nav
      className={`fixed top-0 z-10 w-full bg-white transition-all duration-500 ease-in-out ${
        ShowTime ? "bg-opacity-100 shadow-lg" : "bg-opacity-20"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
          <div className="flex justify-between items-center w-full lg:w-auto">
            <a
              href="#"
              aria-label="logo"
              className="flex space-x-2 items-center"
              onClick={() => handleNavigation("/")}
            >
              <span className="text-2xl font-bold dark:text-blue-900">
                TECH<span className="text-red-600">NEPAL</span>
              </span>
            </a>

            {/* Hamburger for mobile view */}
            <button
              aria-label="menu"
              id="hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden block focus:outline-none"
            >
              <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:flex lg:items-center lg:w-auto space-y-6 lg:space-y-0 lg:space-x-6 lg:pl-4 transition-all duration-500 ease-in-out bg-white lg:bg-transparent`}
          >
            <ul className="flex flex-col lg:flex-row items-center text-sm font-medium space-y-4 lg:space-y-0 lg:space-x-8">
              <li>
                <a
                  href="#"
                  onClick={() => handleNavigation("/")}
                  className="text-black hover:text-blue-700 transition-all"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleNavigation("/product")}
                  className="text-black hover:text-blue-700 transition-all"
                >
                  Products
                </a>
              </li>
              {items.length !== 0 && (
                <li>
                  <a
                    href="#"
                    onClick={() => handleNavigation("/cart")}
                    className="text-black hover:text-blue-700 transition-all"
                  >
                    Cart <sup className="text-red-500">{items.length}</sup>
                  </a>
                </li>
              )}
              {(user.length > 0 || localStorage.getItem("token")) && (
                <li>
                  <Link
                    to="/profile"
                    className="text-black hover:text-blue-700 transition-all"
                    onClick={() => setIsMenuOpen(false)} // Close menu after navigating
                  >
                    Profile
                  </Link>
                </li>
              )}
            </ul>

            {/* Auth Buttons */}
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4 mt-6 lg:mt-0">
              {user.length === 0 &&
              (!localStorage.getItem("token") ||
                localStorage.getItem("token") === "") ? (
                <>
                  <button
                    onClick={() => handleNavigation("/register")}
                    className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-400 transition"
                  >
                    Register
                  </button>
                  <button
                    onClick={() => handleNavigation("/login")}
                    className="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-full hover:bg-gray-200 transition"
                  >
                    Login
                  </button>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-full hover:bg-gray-200 transition"
                >
                  LogOut
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
