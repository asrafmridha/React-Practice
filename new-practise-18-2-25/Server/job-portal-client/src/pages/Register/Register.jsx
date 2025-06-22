import Lottie from 'lottie-react';
import registerLottieData from '../../assets/lottie/registerAnimation.json'
const Register = () => {
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
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
