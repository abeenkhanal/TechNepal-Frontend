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
  const [menuOpen, setMenuOpen] = useState(false); // State to handle mobile menu toggle

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.pageYOffset > 300) {
        setShowTime(true);
      } else {
        setShowTime(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", function () {
        if (this.pageYOffset > 100) {
          setShowTime(true);
        } else {
          setShowTime(false);
        }
      });
    };
  }, [ShowTime]);

  const handleLogout = () => {
    //empty the data from auth store
    dispatch(logOut());

    //localstorage remove/clear
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    dispatch(fetchCartItems());
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <nav
      className={`fixed top-0 z-10 w-full bg-white transition-all delay-75 duration-700 ease-in-out ${
        ShowTime ? "bg-opacity-100 shadow-lg" : "bg-opacity-20"
      }`}
    >
      <div className="container m-auto px-4 md:px-12 lg:px-7">
        <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
          <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
            <a
              href="#"
              aria-label="logo"
              className="flex space-x-2 items-center "
              onClick={() => navigate("/")}
            >
              <span className="text-2xl font-bold dark:text-blue-900">
                TECH<span className="text-red-600">NEPAL</span>
              </span>
            </a>

            <button
              aria-label="hamburger"
              id="hamburger"
              className="relative w-10 h-10 -mr-2 lg:hidden focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)} // Toggles the mobile menu
            >
              <div
                className={`w-6 h-0.5 bg-yellow-900 rounded transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 mt-2 bg-yellow-900 rounded transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:flex lg:w-7/12 items-center justify-end space-y-6 p-6 rounded-xl bg-white lg:space-y-0 lg:p-0 lg:bg-transparent transition-all ease-in-out duration-300 ${
              menuOpen ? "block" : "hidden"
            } lg:block`}
          >
            <div className="lg:pr-4">
              <ul className="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                <li>
                  <a
                    href="#"
                    onClick={() => navigate("/")}
                    className="block md:px-4 transition hover:text-blue-700 text-black"
                  >
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => navigate("/product")}
                    className="block md:px-4 transition hover:text-blue-700"
                  >
                    <span>Products</span>
                  </a>
                </li>
                {items.length !== 0 && (
                  <li>
                    <a
                      href="#"
                      onClick={() => navigate("/cart")}
                      className="block md:px-4 transition hover:text-blue-700"
                    >
                      <span>
                        Cart <sup>{items.length}</sup>
                      </span>
                    </a>
                  </li>
                )}
                {(user.length > 0 || localStorage.getItem("token")) && (
                  <li>
                    <Link
                      to="/profile"
                      className="block md:px-4 transition hover:text-blue-700"
                    >
                      <span>Profile</span>
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div className="w-full space-y-2 border-gray-300 lg:space-y-0 md:w-max lg:border-l px-2 ">
              {user.length === 0 &&
              (!localStorage.getItem("token") ||
                localStorage.getItem("token") === null) ? (
                <>
                  <button
                    type="button"
                    title="Start buying"
                    className="w-full py-3 px-6 text-center rounded-full transition bg-blue-500 hover:bg-blue-400 focus:bg-blue-300 sm:w-max"
                    onClick={() => navigate("/register")}
                  >
                    <span className="block text-white font-semibold text-sm">
                      Register
                    </span>
                  </button>
                  <button
                    type="button"
                    title="Start buying"
                    className="w-full py-3 px-6 text-center rounded-full transition bg-blue-300 hover:bg-blue-100 focus:bg-blue-300 sm:w-max"
                    onClick={() => navigate("/login")}
                  >
                    <span className="block text-gray-800 font-semibold text-sm">
                      Login
                    </span>
                  </button>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  type="button"
                  title="LogOut"
                  className="w-full py-3 px-6 text-center rounded-full transition bg-blue-300 hover:bg-blue-100 active:bg-blue-400 focus:bg-blue-300 sm:w-max"
                >
                  <span className="block text-gray-800 font-semibold text-sm">
                    LogOut
                  </span>
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
