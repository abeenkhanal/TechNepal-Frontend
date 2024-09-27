import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyotp } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { STATUSES } from "../../../globals/components/misc/statuses";

export default function VerifyOtp() {
  const [otp, setOtp] = useState(null);
  const navigate = useNavigate();

  const { forgotPasswordData } = useSelector((state) => state.auth);
  console.log(forgotPasswordData);
  const dispatch = useDispatch();
  
  const data2 = {
    email: forgotPasswordData.email,
    otp: otp,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyotp(data2));
  };

  useEffect(() => {
    if (forgotPasswordData.status === STATUSES.SUCCESS) {
      navigate("/resetPassword");
    }
  }, [forgotPasswordData.status]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 space-y-6">
          <h3 className="text-2xl font-semibold text-center text-gray-800">
            Verify OTP
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Input field for OTP */}
            <div>
              <label
                className="block text-sm font-bold text-gray-700"
                htmlFor="otp"
              >
                OTP
              </label>
              <input
                className="w-full px-3 py-2 mt-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                id="otp"
                name="otp"
                onChange={(e) => setOtp(e.target.value)}
                type="number"
                placeholder="Enter OTP"
              />
            </div>

            {/* Submit button for OTP verification */}
            <div className="text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
