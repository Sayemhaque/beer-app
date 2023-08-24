import { useLocation, useNavigate,} from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import InputField from "./InputField";
import Button from "./Button";

const Form = () => {
  const navigate = useNavigate()
  const { Login,emailFieldErr,passwordFieldErr,} = useAuth()
  const location = useLocation()
  const msg = location.state?.msg;
  console.log(msg)

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userData = {email, password}
    Login(userData)
    const user = localStorage.getItem("userData")
    if(user){
      navigate("/beers")
    }  
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-800 to-purple-800">
      <div className="bg-white rounded shadow-md p-8 w-96 animate-slide-up">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
           <InputField
            type="text"
            label="Email"
            name="email"
            placeholder="Enter your Email"
            error={emailFieldErr}
           />
           <InputField
            type="password"
            label="password"
            name="password"
            placeholder="password"
            error={passwordFieldErr}
           />
           <Button
           type="submit"
           title="Login"
           styles="px-3 py-2 mt-5"
           />
        </form>
      </div>
    </div>
  );
};

export default Form;
