import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div style={{ fontFamily: "Poppins" }}>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto mt-3">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 p-3 mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="grid w-11/12 grid-cols-12 gap-3 p-3 mx-auto">
        <aside className="col-span-3"><LeftNavbar></LeftNavbar></aside>
        <section className="col-span-6"><Outlet></Outlet></section>
        <aside className="col-span-3"><RightNavbar></RightNavbar></aside>
      </main>
    </div>
  );
};

export default HomeLayout;
