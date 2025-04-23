import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Root = () => {
    const { loading } = useContext(AuthContext);
       if(loading){
          return <span className="loading loading-ring loading-xl m-70 p-28"></span>;
       }

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
