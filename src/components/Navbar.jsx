import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
    const navigate = useNavigate()
    const { LogOut } = useAuth()
    const user = localStorage.getItem("userData")
    const userData = JSON.parse(user)

    const handleLogOut = () => {
        LogOut()
        navigate("/")
    }

    return (
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 shadow-xl py-4 sticky top-0 z-10 ">
            <div className="flex justify-between items-center md:max-w-6xl mx-auto px-6">
                {/* logo */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">BeerHub</h2>
                </div>
                {/* userinfo & logOut button */}
                <div className="flex justify-center items-center gap-4">
                    <div>
                        <p className="hidden md:inline font-bold text-white">{userData.email}</p>
                    </div>
                    <Button
                        title="LogOut"
                        styles="px-3 py-2 bg-white text-black"
                        onClick={handleLogOut}
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;