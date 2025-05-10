import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signInWithUser,setUser } = useContext(AuthContext);
  const [error,setError]=useState({});
  const navigate=useNavigate()

  const location =useLocation();
  console.log(location);
  const handleLogin=(event)=>{
    event.preventDefault();
    let target = event.target;
    const email = target.email.value;
    const password = target.password.value;
    signInWithUser(email,password)
    .then((result) => {
      const user = result.user;
        console.log(user);
        setUser(user);
        target.reset();
        navigate(location?.state ? location.state : "/");
    })
    .catch((err) => {
      setError({...error,login:err.code});
    });

  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login Your Account
        </h2>
        <form onSubmit={handleLogin}>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              {
                error?.login &&  
                <label className="label text-red-600 font-bold text-xs">{error.login}</label>
              }
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </form>
        <p className="font-semibold text-center">
          Don't Have an Account?{" "}
          <Link className="text-red-500" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
