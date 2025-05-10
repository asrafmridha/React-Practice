import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";

const Register = () => {
  const { createUser, setUser,updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate=useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    let target = event.target;
    const name = target.name.value;
    if (name.length < 5) {
      setError({ ...error, name: "Name Must Be Greater than  5 Character" });
      return;
    }
    const email = target.email.value;
    const photoUrl = target.photoUrl.value;
    const password = target.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        target.reset();
        updateUserProfile({
          displayName :name,
          photoURL :photoUrl
        }).then(()=>{
          navigate("/");
        })
        .catch((error) => {
          console.error("error", error);
        })
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister}>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              {error?.name && <label className="label text-red-600 font-bold text-xs"  >{error.name}</label>}
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              <label className="label">Photo Url</label>
              <input
                type="text"
                name="photoUrl"
                className="input"
                placeholder="Photo Url"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </div>
        </form>
        <p className="font-semibold text-center">
          Already Have an Account?{" "}
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
