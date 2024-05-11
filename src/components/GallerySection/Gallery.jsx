import { useState } from "react";
import { Dialog, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import GalleryCard from "./GalleryCard";

//Modal
const FeedbackModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  //Input Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (e) => {
    const { userName, feedback, imageURL } = e;
    reset();
    handleOpen();
    const formData = { userName, feedback, imageURL };
    console.log(formData);
  };

  return (
    <div>
      <div className="text-center">
        <button
          onClick={handleOpen}
          className="px-4 md:px-6 py-2 md:py-3 text-base font-semibold tracking-wide text-pink-50 bg-[#932584]  rounded-lg"
        >
          Add Feedback
        </button>
      </div>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <form
          className="bg-pink-50 rounded-lg shadow-lg p-6"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          {/* User  */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#932584]">
              User:
            </label>
            <input
              name="userName"
              defaultValue={"Arnab Saha"}
              className="block w-full px-4 py-2 text-[#932584] bg-[#f8d1e0] border border-[#932584] rounded-lg  focus:outline-none"
              type="text"
              readOnly
              {...register("userName")}
            />
          </div>
          {/* Feedback  */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-[#932584]">
              Feedback:
            </label>
            <input
              name="feedback"
              className="block w-full px-4 py-6 text-[#932584] bg-[#f8d1e0] border border-[#932584] rounded-lg    focus:border-[#d92775] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#d92775] placeholder:text-[#d927754D]"
              type="text"
              placeholder="Amazing Experience...."
              {...register("feedback", {
                required: {
                  value: true,
                  message: "Please write something....",
                },
                minLength: {
                  value: 10,
                  message: "Write at least 10 words.",
                },
                maxLength: {
                  value: 30,
                  message: "Write in 30 words.",
                },
              })}
            />
            {errors.feedback && (
              <Typography
                variant="paragraph"
                className="text-[#d92775] font-DotGothic16 capitalize italic"
              >
                {errors.feedback?.message}
              </Typography>
            )}
          </div>
          {/* URL  */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-[#932584]">
              Image URL:
            </label>
            <input
              name="imageURL"
              className="block w-full px-4 py-2 text-[#932584] bg-[#f8d1e0] border border-[#932584] rounded-lg    focus:border-[#d92775] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#d92775] placeholder:text-[#d927754D]"
              type="url"
              placeholder="Enter Image Url"
              {...register("imageURL", {
                required: {
                  value: true,
                  message: "Image URL is required.",
                },
              })}
            />
            {errors.imageURL && (
              <Typography
                variant="paragraph"
                className="text-[#d92775] font-DotGothic16 capitalize italic"
              >
                {errors.imageURL?.message}
              </Typography>
            )}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium tracking-wide text-pink-50 bg-[#932584] capitalize rounded-lg focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
        ;
      </Dialog>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Add Feedback Button  */}
      <FeedbackModal />
      {/* Gallery Card  */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {[...Array(12).keys()].map((idx) => (
          <GalleryCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
