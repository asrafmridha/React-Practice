import { useState } from "react";
import Link from "../Link/Link";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { name: "Home", id: 1, path: "/" },
    { name: "About", id: 2, path: "/about" },
    { name: "Services", id: 3, path: "/services" },
    { name: "Contact", id: 4, path: "/contact" },
    { name: "Blog", id: 5, path: "/blog" },
  ];
  return (
    <nav>
      <div
        onClick={() => setOpen(!open)}
        className="text-5xl size md:hidden lg:hidden"
      >
        {open === true ? <RxCross1 /> : <IoIosMenu />}
      </div>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
