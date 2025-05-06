import { Link } from "react-router-dom";
import user from "../assets/user.png"
const Navbar = () => {

    return (
        <div className="flex items-center justify-between">
            <div></div>
            <div className="space-x-4">
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Carrer</Link>
            </div>
            <div className="flex items-center gap-2">
                <img src={user} alt="" />
                <Link to="/auth/login"  className="w-32 text-white btn bg-amber-950">Login</Link>
            </div>
           
        </div>
    );
};

export default Navbar;