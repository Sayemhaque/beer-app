import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Form = () => {
    const navigate = useNavigate()
    const {Login} = useAuth()
    const location = useLocation()
    const msg = location.state?.msg;
    console.log(msg)
    const handleLogin = (e) => {
        e.preventDefault()
        Login()
        navigate("/beers")
    }
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-800 to-purple-800">
        {/* message */}
      <div className="bg-white rounded shadow-md p-8 w-80 animate-slide-up">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded px-4 py-2 w-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </button>
          </div>
          <p className="text-red-400">{msg}</p>
        </form>
      </div>
    </div>
  );
};

export default Form;
