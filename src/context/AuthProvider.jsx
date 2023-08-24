/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState } from "react";



export const AuthContext = createContext()
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [emailFieldErr, setEmailFieldErr] = useState("")
    const [passwordFieldErr, setPasswordFieldErr] = useState("")

    const Login = (userData) => {
        const { email, password } = userData;
        // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (email === "" && password === "") {
            setEmailFieldErr("Email is required")
            setPasswordFieldErr("password is required")
            return;
        }

        if (email === "") {
            setPasswordFieldErr("")
            setEmailFieldErr("Email is required")
            return;
        }

        if (password === "") {
            setEmailFieldErr("")
            setPasswordFieldErr("password is required")
            return;
        }
        if (password.length < 6) {
            setEmailFieldErr("")
            setPasswordFieldErr("password is must be 6 charachter long")
            return;
        }

        else{
            setEmailFieldErr("")
            setPasswordFieldErr("")
            localStorage.setItem("userData", JSON.stringify(userData))
        }
    }
      
      

    const LogOut = () => {
        localStorage.removeItem("userData")
    }


    const auth = {
        emailFieldErr,
        passwordFieldErr,
        Login,
        LogOut
    }

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;