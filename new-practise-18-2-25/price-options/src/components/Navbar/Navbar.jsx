import Link from "../Link/Link";

const Navbar = () => {
  const routes = [
    { name: "Home", id: 1, path: "/" },
    { name: "About", id: 2, path: "/about" },
    { name: "Services", id: 3, path: "/services" },
    { name: "Contact", id: 4, path: "/contact" },
    { name: "Blog", id: 5, path: "/blog" },
  ];
  return (
    <nav>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
