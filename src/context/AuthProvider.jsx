import { useState } from "react";
import { createContext } from "react";



export const AuthContext = createContext()
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(false)

    const Login = () => {
        setUser(true)
    }

    const LogOut = () => {
        setUser(false)
    }

    const auth = {
        user,
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