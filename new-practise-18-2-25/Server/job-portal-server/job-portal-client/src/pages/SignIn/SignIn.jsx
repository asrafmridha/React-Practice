import Lottie from "lottie-react";
import registerLottieData from "../../assets/lottie/registerAnimation.json";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import { useLocation, useNavigate } from "react-router";

const SignIn = () => {
  const { signInWithUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const from=location.state || '/';
  const navigate=useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    let target = e.target;
    const email = target.email.value;
    const password = target.password.value;
    signInWithUser(email, password)
      .then((result) => {
        // const user = result.user;
      navigate(from);

      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <p className="py-6">
            <Lottie animationData={registerLottieData}></Lottie>
          </p>
        </div>
        <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold m-5">Login Now!</h1>
          <form onSubmit={handleSignIn}>
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Sign In</button>
                <SocialLogin></SocialLogin>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
