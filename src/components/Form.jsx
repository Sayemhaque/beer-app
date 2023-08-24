import { useLocation, useNavigate, } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import InputField from "./InputField";

const Form = () => {
  const navigate = useNavigate()
  const { Login } = useAuth()
  const location = useLocation()
  const msg = location.state?.msg;
  console.log(msg)

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userData = {email, password}
    console.log(userData)
    Login(userData)
    navigate("/beers")
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-800 to-purple-800">
      <div className="bg-white rounded shadow-md p-8 w-80 animate-slide-up">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
           <InputField
            type="email"
            label="Email"
            name="email"
            placeholder="Enter your Email"
           />
           <InputField
            type="password"
            label="password"
            name="password"
            placeholder="password"
           />
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded px-4 py-2 w-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </button>
          </div>
            {/* message */}
          <p className="text-red-400">{msg}</p>
        </form>
      </div>
    </div>
  );
};

export default Form;
