import { Link } from "react-router-dom";
import user from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <div className="flex items-center justify-between">
      <div></div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link>About</Link>
        <Link>Carrer</Link>
      </div>
      <div className="flex items-center gap-2">
        <img src={user} alt="" />
        {user ? (
          <>
            <span>{user?.email}</span>
            <a onClick={handleSignOut} className="btn">
              Sign Out
            </a>
          </>
        ) : (
          <Link to="/auth/login" className="w-32 text-white btn bg-amber-950">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
