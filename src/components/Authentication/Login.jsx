import { useState } from "react";
import { TbEyeCancel, TbEyeCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Typography } from "@material-tailwind/react";

const Login = () => {
  const [passVisible, setPassVisible] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //Form Validation And Authenticate Use
  const handleFormSubmit = (e) => {
    const { email, password } = e;
    console.log(email, password);

    reset();
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] container mx-auto px-4 py-10">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-[#d927751A] rounded-lg shadow-lg  md:max-w-4xl ">
        <div
          className="hidden bg-cover bg-center md:block md:w-1/2"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')`,
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 md:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://i.postimg.cc/VvfG9N7b/serving-dish.png"
              alt="dine-portal-logo"
            />
          </div>

          <p className="mt-3 text-xl text-center text-[#932584]">
            Welcome back!
          </p>

          <div className="flex cursor-pointer items-center justify-center mt-4 text-[#d92775] transition-colors duration-700 transform border border-[#932584] rounded-lg   hover:bg-[#932584] hover:text-pink-50 ">
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center capitalize">
              Log in with Google
            </span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-[#932584]  lg:w-1/4"></span>

            <div className="text-xs text-center text-[#932584] uppercase  hover:underline">
              or login with email
            </div>

            <span className="w-1/5 border-b border-[#932584] lg:w-1/4"></span>
          </div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-[#932584]"
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                name="email"
                className="block w-full px-4 py-2 text-[#932584] bg-[#f8d1e0] border border-[#932584] rounded-lg    focus:border-[#d92775] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#d92775] placeholder:text-[#d927754D]"
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required.",
                  },
                })}
              />
              {errors.email && (
                <Typography
                  variant="paragraph"
                  className="text-[#d92775] font-DotGothic16 capitalize italic"
                >
                  {errors.email?.message}
                </Typography>
              )}
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-[#932584]"
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <div className="relative">
                <input
                  id="loggingPassword"
                  autoComplete="current-password"
                  name="password"
                  className="block w-full px-4 py-2 text-[#932584] bg-[#f8d1e0] border border-[#932584] rounded-lg    focus:border-[#d92775] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#d92775] placeholder:text-[#d927754D]"
                  type={passVisible ? "text" : "password"}
                  placeholder="Your Password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required.",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[a-z]).{6,16}$/,
                      message: "Invalid password.",
                    },
                  })}
                />
                <span
                  onClick={() => setPassVisible(!passVisible)}
                  className="text-[#932584] text-xl absolute right-2.5 bottom-3"
                >
                  {passVisible ? <TbEyeCheck /> : <TbEyeCancel />}
                </span>
              </div>
              {errors.password && (
                <Typography
                  variant="paragraph"
                  className="text-[#d92775] font-DotGothic16 capitalize italic"
                >
                  {errors.password?.message}
                </Typography>
              )}
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium tracking-wide text-pink-50 bg-[#932584] capitalize rounded-lg focus:outline-none"
              >
                Log In
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-[#932584]  md:w-1/4"></span>

            <Link
              to="/registration"
              className="text-xs text-[#932584] uppercase  hover:underline"
            >
              or registration
            </Link>

            <span className="w-1/5 border-b border-[#932584]  md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
