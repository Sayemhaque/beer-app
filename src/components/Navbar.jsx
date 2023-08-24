import Button from "./Button";

const Navbar = () => {
    const user = localStorage.getItem("userData")
    const userData = JSON.parse(user)
    return (
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 shadow-xl py-4 sticky top-0 z-10 ">
            <div className="flex justify-between items-center md:max-w-6xl mx-auto px-6">
                {/* logo */}
                <div>
                    <h2 className="text-5xl font-bold text-white">BeerHub</h2>
                </div>
                {/* userinfo & logOut button */}
                <div className="flex justify-center items-center gap-4">
                    <div>
                        <p className="font-bold text-white">{userData.email}</p>
                    </div>
                    <Button title="LogOut"
                        styles="px-3 py-2 shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;