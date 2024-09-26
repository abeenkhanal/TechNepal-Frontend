import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { forgotPassword } from "../../../store/authSlice"
import { Link, useNavigate } from "react-router-dom"
import { STATUSES } from "../../../globals/components/misc/statuses"

const ForgetPassword = () => {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()
  const { status, data } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(forgotPassword({ email }))
  }

  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      navigate("/verifyotp")
    }
  }, [status])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-full max-w-md px-4 py-8 mx-auto bg-white rounded-lg shadow-lg lg:max-w-lg">
        <h3 className="mb-6 text-3xl font-semibold text-center text-gray-800">
          Forgot Password
        </h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <label
              className="block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 mt-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="text-center">
            <button
              className="w-full px-4 py-2 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition ease-in-out duration-300"
            >
              Send OTP
            </button>
          </div>
          <div className="text-center">
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword
