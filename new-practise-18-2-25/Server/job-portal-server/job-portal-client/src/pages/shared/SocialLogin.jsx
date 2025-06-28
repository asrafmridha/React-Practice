import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { redirect, useNavigate } from "react-router";

const SocialLogin = () => {
    let navigate = useNavigate();
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
       navigate("/");
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  return (
    <>
      <div className="flex items-center gap-4 mt-2">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="text-gray-500 text-sm">OR</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>
      <button
        onClick={handleGoogleLogin}
        className="btn w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        Sign In With Google
      </button>
    </>
  );
};

export default SocialLogin;
