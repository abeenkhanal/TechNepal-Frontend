import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../store/authSlice";
import { STATUSES } from "../../../globals/components/misc/statuses";

const Register = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData));
    if (status === STATUSES.SUCCESS) {
      navigate("/login");
    }
    if (status === STATUSES.ERROR) {
      console.log("error");
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6 space-y-6">
        <h3 className="text-2xl font-semibold text-center text-gray-800">
          Create an Account!
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-bold text-gray-700"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              className="w-full px-3 py-2 mt-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              id="userName"
              name="userName"
              onChange={handleChange}
              type="text"
              required
              placeholder="Full Name"
            />
          </div>

          <div>
            <label
              className="block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 mt-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              id="email"
              name="email"
              onChange={handleChange}
              type="email"
              required
              placeholder="Email"
            />
          </div>

          <div>
            <label
              className="block text-sm font-bold text-gray-700"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              className="w-full px-3 py-2 mt-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              id="phoneNumber"
              name="phoneNumber"
              onChange={handleChange}
              type="number"
              required
              placeholder="Phone Number"
            />
          </div>

          <div>
            <label
              className="block text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 mt-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              id="password"
              name="password"
              onChange={handleChange}
              type="password"
              required
              placeholder="******************"
            />
          </div>

          <div className="text-center">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Register Account
            </button>
          </div>

          <hr className="border-t" />

          <div className="text-center">
            <a
              className="inline-block text-sm text-blue-600 hover:text-blue-800"
              href="#"
              onClick={() => navigate("/login")}
            >
              Already have an account? Login!
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
