import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const {signInWithGoogle,setUser} =useContext(AuthContext)
  const handleGoogleLogin=()=>{
    signInWithGoogle() 
    .then((result) => {
      const user = result.user;
      setUser(user);
    }).catch((error) => {
      console.error("error", error);
    })
  }
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">Login With</h2>
      <button onClick={handleGoogleLogin} className="btn flex items-center w-full gap-2 px-4 py-2 border-2 border-blue-400 rounded-lg hover:bg-blue-50">
        <FaGoogle /> Login with Google
      </button>
      <button className="btn flex items-center w-full gap-2 px-4 py-2 border-2 border-gray-400 rounded-lg hover:bg-gray-100">
        <FaGithub /> Login with Github
      </button>
    </div>
  );
};

export default SocialLogin;
