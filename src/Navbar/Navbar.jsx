import React from "react";
import Link from "../Link/Link";

const Navbar = () => {
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "Services",
      path: "/services",
    },
    {
      id: 5,
      name: "FAQ",
      path: "/faq",
    },
  ];
  return (
    <nav>
      <div className=" list-none md:flex  bg-indigo-600 text-white w-100 ">
        {routes.map((route) => (
          <Link route={route}></Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
{
  /* <div>
        <h1 className="font-bold mx-4">TailWind</h1>
      </div>
      <div className="no-underline mx-3">
        <a className="mx-3" href="/home">
          Home
        </a>
        <a className="mx-3" href="/shop">
          Shop
        </a>
        <a className="mx-3" href="/order">
          Order
        </a>
        <a className="mx-3" href="/login">
          Login
        </a>
      </div> */
}
