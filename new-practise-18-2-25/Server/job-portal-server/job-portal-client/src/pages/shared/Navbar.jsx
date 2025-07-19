import React, { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../../context/AuthContext";
import logo from "../../assets/job-favicon.png";

const Navbar = () => {
  const { user, signOutUser, setUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li> */}
         <li>
        <Link to="/addJob"><button>Add A New Job</button></Link>
      </li>
      <li>
        <Link to="/myJobApplication"><button>My Job Applications</button></Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <img src={logo} alt="" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          {" "}
          <img src={logo} alt="" />
          <h3 className="text-2xl">Job Portal</h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            {user.email}{" "}
            <button onClick={handleSignOut} className="ml-2.5 btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link className="ml-2.5" to="signIn">
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
