import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  Avatar,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useFirebase from "../../../hooks/useFirebase";
import toast from "react-hot-toast";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoLogOutOutline } from "react-icons/io5";

//User Log In Handling
function ProfileMenu() {
  //Auth
  const { user, logOutUser } = useFirebase();
  const navigate = useNavigate();
  const myPic = "https://i.postimg.cc/NM1cX9cm/profile.png";

  //Lot Out
  const logOut = async () => {
    try {
      await logOutUser();
      toast.success("Log Out Successfully.", {
        style: {
          border: "1px solid #932584",
          padding: "16px",
          color: "#932584",
          background: "#fce4ec",
        },
        iconTheme: {
          primary: "#932584",
          secondary: "#fce4ec",
        },
      });
      navigate("/");
    } catch {
      toast.error("Failed, Try Again.", {
        style: {
          border: "1px solid #932584",
          padding: "16px",
          color: "#932584",
          background: "#fce4ec",
        },
        iconTheme: {
          primary: "#932584",
          secondary: "#fce4ec",
        },
      });
    }
  };
  return (
    <Menu>
      <MenuHandler>
        <div className="flex items-center">
          <Avatar
            variant="rounded"
            size="md"
            alt={user?.displayName || "Anonymous"}
            src={user?.photoURL || myPic}
            className="border-2 border-[#932584] cursor-pointer p-0.5"
          />
          <TiArrowSortedDown className="text-[#932584] text-xl" />
        </div>
      </MenuHandler>
      <MenuList className="bg-pink-50 border-none shadow-xl">
        <MenuItem className="hover:bg-none hover:bg-opacity-0 focus:bg-none focus:bg-opacity-0 active:bg-none active:bg-opacity-0 py-1">
          <Typography
            variant="lead"
            className="font-bold text-[#932584] font-raleway text-center w-full"
          >
            {user?.displayName || "Anonymous"}
          </Typography>
        </MenuItem>
        <hr className="my-1 border-[#932584]" />
        <MenuItem
          onClick={() => logOut()}
          className="flex items-center gap-2 hover:bg-none hover:bg-opacity-0 focus:bg-none focus:bg-opacity-0 active:bg-none active:bg-opacity-0"
        >
          <IoLogOutOutline className="text-[#932584] text-xl" />
          <Typography
            variant="paragraph"
            className="font-medium text-[#932584] font-raleway hover:text-[#d92775]"
          >
            Log Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

function NavList() {
  const { user } = useFirebase();
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
      {user ? (
        <div className="flex">
          <ProfileMenu />
        </div>
      ) : (
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
      )}
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
    <Navbar className="sticky top-0 left-0 right-0 z-50 bg-pink-50 mx-auto max-w-full px-4 shadow-sm w-full backdrop-filter-none backdrop-blur-none border-none rounded-none bg-opacity-100">
      <div className="flex items-center justify-between container mx-auto">
        <Link className="flex gap-4 items-center" to="/">
          <img
            className="w-auto h-7"
            src="https://i.postimg.cc/VvfG9N7b/serving-dish.png"
            alt="dine-portal"
          />
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
