import { createContext } from "react";



export const AuthContext = createContext()
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const Login = (userData) => {
       localStorage.setItem("userData",JSON.stringify(userData))
    }

    const LogOut = () => {
        localStorage.removeItem("userData")
    }

    const auth = {
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