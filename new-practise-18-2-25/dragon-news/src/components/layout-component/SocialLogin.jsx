import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">Login With</h2>
      <button className="flex items-center w-full gap-2 px-4 py-2 border-2 border-blue-400 rounded-lg hover:bg-blue-50">
        <FaGoogle /> Login with Google
      </button>
      <button className="flex items-center w-full gap-2 px-4 py-2 border-2 border-gray-400 rounded-lg hover:bg-gray-100">
        <FaGithub /> Login with Github
      </button>
    </div>
  );
};

export default SocialLogin;
