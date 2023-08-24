import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const user = localStorage.getItem("userData")
    const location = useLocation()
    if (user) {
        return children
    }
    return <Navigate to='/' state={{ from: location, msg: "you have to login first" }} replace={true}></Navigate>
};

export default PrivateRoute;