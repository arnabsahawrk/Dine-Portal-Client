import { useState } from "react";
import { TbEyeCancel, TbEyeCheck } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Typography } from "@material-tailwind/react";
import useFirebase from "../../hooks/useFirebase";
import toast from "react-hot-toast";

const Registration = () => {
  const [passVisible, setPassVisible] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //Firebase
  const {
    setUser,
    createUser,
    updateUserProfile,
    firebaseStorage,
    logInWithGoogle,
  } = useFirebase();

  //Authenticate New User
  const handleFormSubmit = async (e) => {
    //Take all the input
    const { name, email, password } = e;
    const imageFile = e.image[0];

    //Get a imageURL from firebase.
    const imageURL = await firebaseStorage(imageFile, imageFile.name);

    // const formData = { name, email, password, imageURL };

    //Create New User
    try {
      await createUser(email, password);
      toast.success("Successfully Registered.", {
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

      //Update Profile
      await updateUserProfile(name, imageURL);
      setUser((user) => ({
        ...user,
        displayName: name,
        photoURL: imageURL,
      }));
    } catch {
      toast.error("Registered Denied.", {
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

    reset();
  };

  //LogIn with Google
  const googleLogIn = async () => {
    try {
      await logInWithGoogle();
      toast.success("Successfully Log In.", {
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
      toast.error("Login Failed.", {
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
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] container mx-auto px-4 py-10">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-[#d927751A] rounded-lg shadow-lg  md:max-w-4xl">
        <div className="w-full px-6 py-8 md:px-8 md:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://i.postimg.cc/VvfG9N7b/serving-dish.png"
              alt="dine-portal-logo"
            />
          </div>

          <p className="mt-3 text-xl text-center text-[#932584]">
            Get Your Free Account Now.
          </p>

          <div
            onClick={() => googleLogIn()}
            className="flex cursor-pointer items-center justify-center mt-4 text-[#d92775] transition-colors duration-700 transform border border-[#932584] rounded-lg   hover:bg-[#932584] hover:text-pink-50"
          >
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
              log in with Google
            </span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/6 border-b border-[#932584]  lg:w-1/4"></span>

            <div className="text-xs text-center text-[#932584] uppercase  hover:underline">
              or Registration with email
            </div>

            <span className="w-1/6 border-b border-[#932584] lg:w-1/4"></span>
          </div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-[#932584]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                autoComplete="name"
                name="name"
                className="block w-full px-4 py-2 text-[#932584] bg-[#f8d1e0] border border-[#932584] rounded-lg    focus:border-[#d92775] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#d92775] placeholder:text-[#d927754D]"
                type="text"
                placeholder="Your Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required.",
                  },
                })}
              />
              {errors.name && (
                <Typography
                  variant="paragraph"
                  className="text-[#d92775] font-DotGothic16 capitalize italic"
                >
                  {errors.name?.message}
                </Typography>
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-[#932584]"
              >
                Image
              </label>
              <input
                name="image"
                type="file"
                className="block w-full px-3 py-1 text-sm text-[#932584] bg-[#f8d1e0] border border-[#932584] rounded-lg file:bg-[#932584] file:text-pink-50 file:text-sm file:px-4 file:py-1.5 file:border-none file:rounded-lg focus:border-[#d92775] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#d92775]"
                accept="image/jpeg, image/jpg, image/png"
                {...register("image", {
                  required: "Please select an image",
                  validate: {
                    fileType: (value) => {
                      const fileExtension = value[0]?.type.split("/")[1];
                      return (
                        ["jpeg", "jpg", "png"].includes(
                          fileExtension.toLowerCase()
                        ) || "Only JPEG, JPG, and PNG files are allowed"
                      );
                    },
                  },
                })}
              />
              {errors.image && (
                <Typography
                  variant="paragraph"
                  className="text-[#d92775] font-DotGothic16 capitalize italic"
                >
                  {errors.image?.message}
                </Typography>
              )}
            </div>
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
                      value: /^(?=.*[A-Z])(?=.*[a-z])/,
                      message:
                        "Password must contain 1 upper & lower case letter.",
                    },
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters.",
                    },
                    maxLength: {
                      value: 16,
                      message: "Password must be in 16 characters.",
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
                Register
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-[#932584]  md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs text-[#932584] uppercase  hover:underline"
            >
              or log in
            </Link>

            <span className="w-1/5 border-b border-[#932584]  md:w-1/4"></span>
          </div>
        </div>
        <div
          className="hidden bg-cover bg-center md:block md:w-1/2 relative"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-pink-50 bg-opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
