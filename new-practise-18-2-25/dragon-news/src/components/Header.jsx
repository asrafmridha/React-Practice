import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-2">
      <div className="logo">
        <img className="w-[300px]" src={logo} alt="" />
      </div>
      <h4 className="text-gray-400">Journalism Without Fear or Favour</h4>
    </div>
  );
};

export default Header;
