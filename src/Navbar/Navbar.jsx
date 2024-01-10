import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
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
    <nav className="bg-indigo-400">
      <div onClick={() => setOpen(!open)} className="md:hidden ">
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 "></XMarkIcon>
          ) : (
            <Bars3Icon className="h-6 w-6"></Bars3Icon>
          )}
        </span>
      </div>

      <div
        className={` list-none md:flex md:static absolute duration-500 bg-indigo-400 text-white  ${
          open ? "top-6" : "-top-36"
        }`}
      >
        {routes.map((route) => (
          <Link route={route} key={route.id}></Link>
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
