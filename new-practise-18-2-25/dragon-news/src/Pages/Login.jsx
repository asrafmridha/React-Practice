import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-10">
        <h2 className="text-2xl font-semibold text-center">Login Your Account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
        <p className="font-semibold text-center">
            Don't Have an Account? <Link className="text-red-500" to="/auth/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
