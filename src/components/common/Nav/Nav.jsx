import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-raleway text-[#932584] hover:text-[#d92775]"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-[#d92775]" : ""} ${
              isPending ? "text-pink-900" : ""
            }`
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-raleway text-[#932584] hover:text-[#d92775]"
      >
        <NavLink
          to="/allFoods"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-[#d92775]" : ""} ${
              isPending ? "text-pink-900" : ""
            }`
          }
        >
          All Foods
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-raleway text-[#932584] hover:text-[#d92775]"
      >
        <NavLink
          to="/gallery"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-[#d92775]" : ""} ${
              isPending ? "text-pink-900" : ""
            }`
          }
        >
          Gallery
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-raleway text-[#932584] hover:text-[#d92775]"
      >
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-[#d92775]" : ""} ${
              isPending ? "text-pink-900" : ""
            }`
          }
        >
          Login
        </NavLink>
      </Typography>
    </ul>
  );
}

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="fixed top-0 left-0 right-0 z-50 bg-pink-50 mx-auto max-w-full px-6 py-3 shadow-sm w-full backdrop-filter-none backdrop-blur-none border-none rounded-none">
      <div className="flex items-center justify-between container mx-auto">
        <Link to="/">
          <Typography
            as="h1"
            variant="h4"
            className="py-1.5 text-[#d92775] font-raleway"
          >
            Dine <span className="text-[#932584]">Portal</span>
          </Typography>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 text-[#d92775]" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 text-[#932584]" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Nav;
