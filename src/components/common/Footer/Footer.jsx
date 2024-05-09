import { Typography } from "@material-tailwind/react";
import { BsTwitterX } from "react-icons/bs";
import { LuGithub } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-pink-50">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
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

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            <ul className="flex gap-2 items-center">
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
          </div>
        </div>

        <hr className="my-6 border-[#932584] md:my-10" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-3">
          <p className="text-sm text-[#932584]">
            © Copyright 2024. All Rights Reserved.
          </p>

          <div className="flex -mx-2 gap-2 text-xl text-[#932584] *:p-1 *:rounded-full">
            <a
              className="hover:text-pink-50 hover:bg-[#932584] transition duration-700"
              href="https://www.facebook.com/arnabsahawrk/"
              target="_blank"
            >
              <SlSocialFacebook />
            </a>
            <a
              className="hover:text-pink-50 hover:bg-[#932584] transition duration-700"
              href="https://twitter.com/arnabsahawrk/"
              target="_blank"
            >
              <BsTwitterX />
            </a>
            <a
              className="hover:text-pink-50 hover:bg-[#932584] transition duration-700"
              href="https://www.linkedin.com/in/arnabsahawrk/"
              target="_blank"
            >
              <RiLinkedinLine />
            </a>
            <a
              className="hover:text-pink-50 hover:bg-[#932584] transition duration-700"
              href="https://github.com/arnabsahawrk/"
              target="_blank"
            >
              <LuGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
