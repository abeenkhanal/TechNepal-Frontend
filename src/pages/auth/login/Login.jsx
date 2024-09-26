import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(userData));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="container max-w-md mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl text-center font-semibold text-gray-700 mb-6">
            Welcome Back{data.userName ? `, ${data.userName}!` : "!"}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-bold text-gray-700 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                id="email"
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold text-gray-700 mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                id="password"
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  className="form-checkbox text-blue-600"
                  type="checkbox"
                />
                <span className="ml-2 text-gray-700">Remember Me</span>
              </label>
            </div>
            <div className="mb-6 text-center">
              <button
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              >
                Log In
              </button>
            </div>
            <hr className="mb-6 border-gray-300" />
            <div className="text-center">
              <button
                className="text-blue-500 hover:text-blue-800"
                onClick={() => navigate("/register")}
              >
                Create an Account!
              </button>
            </div>
            <div className="text-center">
              <button
                className="text-blue-500 hover:text-blue-800"
                onClick={() => navigate("/forgetPassword")}
              >
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
