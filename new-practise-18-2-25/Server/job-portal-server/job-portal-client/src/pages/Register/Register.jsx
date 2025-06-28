import Lottie from "lottie-react";
import registerLottieData from "../../assets/lottie/registerAnimation.json";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import SocialLogin from "../shared/SocialLogin";
const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState("");
  const isValidPassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;
    return regex.test(password);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    let target = e.target;
    const email = target.email.value;
    const password = target.password.value;
    const passwordCheck = isValidPassword(password);
    // if (!passwordCheck) {
    //   setErrorMessage("At Least One Upper Case And Special Character!");
    //   return;
    // }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        target.reset();
      })
      .catch((error) => {
        console.error("error", error);
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
          <h1 className="text-5xl font-bold m-5">Register Now!</h1>
          <form onSubmit={handleRegister}>
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
                {errorMessage && <p className="error">{errorMessage}</p>}
                <button className="btn btn-neutral mt-4">Register</button>
                <SocialLogin></SocialLogin>
                
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
