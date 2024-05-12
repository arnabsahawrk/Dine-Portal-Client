import { Dialog, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

//Modal
const UpdateModal = () => {
  const updatedTime = new Date().toLocaleString();
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
    const {
      userName,
      userEmail,
      foodName,
      imageURL,
      foodCategory,
      foodOrigin,
      quantity,
      price,
      description,
    } = e;

    const formData = {
      userName,
      userEmail,
      foodName,
      imageURL,
      foodCategory,
      foodOrigin,
      quantity,
      price,
      description,
      //   addedTime,
      updatedTime,
    };

    reset();
    handleOpen();
    console.log(formData);
  };

  return (
    <div>
      <div className="text-center">
        <button
          onClick={handleOpen}
          className="px-4 py-2 text-xs font-semibold text-pink-50 uppercase bg-[#932584] rounded-md"
        >
          Update
        </button>
      </div>
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mx-auto overflow-hidden bg-pink-50 rounded-lg shadow-lg   px-6 py-8 md:px-8"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          {/* User Name  */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#932584]">
              User
            </label>
            <input
              defaultValue={"Arnab Saha"}
              name="userName"
              className="block w-full px-4 py-2 text-[#932584] bg-[#f8d1e0] border border-[#932584] rounded-lg    focus:outline-none font-bold"
              readOnly
              type="text"
              {...register("userName")}
            />
          </div>
          {/* User Email  */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#932584]">
              Email
            </label>
            <input
              defaultValue={"arnabsahawrk@gmail.com"}
              name="email"
              className="block w-full px-4 py-2 text-[#932584] bg-[#f8d1e0] border border-[#932584] rounded-lg    focus:outline-none font-bold"
              readOnly
              type="email"
              {...register("userEmail")}
            />
          </div>
          {/* Food Name  */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#932584]">
              Food Name
            </label>
            <input
              name="foodName"
              className="block w-full px-4 py-2 text-[#932584] bg-[#f8d1e0] border border-[#932584] rounded-lg    focus:border-[#d92775] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#d92775] placeholder:text-[#d927754D]"
              type="text"
              placeholder="Enter Food Name"
              {...register("foodName", {
                required: {
                  value: true,
                  message: "Food Name is required.",
                },
                minLength: {
                  value: 4,
                  message: "Food Name should have at least 4 characters",
                },
                maxLength: {
                  value: 8,
                  message: "Food Name should be in 8 characters",
                },
              })}
            />
            {errors.foodName && (
              <Typography
                variant="paragraph"
                className="text-[#d92775] font-DotGothic16 capitalize italic"
              >
                {errors.foodName?.message}
              </Typography>
            )}
          </div>
          {/* Image Upload  */}
          {/* <div>
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
        </div> */}
          {/* Image URL  */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#932584]">
              Image URL
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
          {/* Food Category  */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#932584]">
              Food Category
            </label>
            <select
              name="foodCategory"
              className="block w-full px-4 py-2 text-[#932584] bg-[#f8d1e0] border border-[#932584] rounded-lg    focus:border-[#d92775] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#d92775]"
              {...register("foodCategory")}
            >
              <option value="Indian">Indian</option>
              <option value="Japanese">Japanese</option>
              <option value="Thai">Thai</option>
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
              <option value="Chinese">Chinese</option>
              <option value="American">American</option>
              <option value="French">French</option>
            </select>
          </div>
          {/* Food Origin  */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#932584]">
              Food Origin
            </label>
            <select
              name="foodOrigin"
              className="block w-full px-4 py-2 text-[#932584] bg-[#f8d1e0] border border-[#932584] rounded-lg    focus:border-[#d92775] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#d92775]"
              {...register("foodOrigin")}
            >
              <option value="Asian">Asian</option>
              <option value="European">European</option>
              <option value="Latin American">Latin American</option>
              <option value="North American">North American</option>
              <option value="Caribbean">Caribbean</option>
              <option value="Pacific Islands">Pacific Islands</option>
            </select>
          </div>
          {/* Quantity  */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#932584]">
              Quantity
            </label>
            <input
              name="quantity"
              className="block w-full px-4 py-2 text-[#932584] bg-[#f8d1e0] border border-[#932584] rounded-lg    focus:border-[#d92775] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#d92775] placeholder:text-[#d927754D]"
              type="number"
              placeholder="Enter Food Quantity"
              {...register("quantity", {
                required: {
                  value: true,
                  message: "Food Quantity is required.",
                },
              })}
            />
            {errors.quantity && (
              <Typography
                variant="paragraph"
                className="text-[#d92775] font-DotGothic16 capitalize italic"
              >
                {errors.quantity?.message}
              </Typography>
            )}
          </div>
          {/* Price  */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#932584]">
              Price
            </label>
            <input
              name="price"
              className="block w-full px-4 py-2 text-[#932584] bg-[#f8d1e0] border border-[#932584] rounded-lg    focus:border-[#d92775] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#d92775] placeholder:text-[#d927754D]"
              type="number"
              placeholder="Enter Food Price"
              {...register("price", {
                required: {
                  value: true,
                  message: "Food Price is required.",
                },
              })}
            />
            {errors.price && (
              <Typography
                variant="paragraph"
                className="text-[#d92775] font-DotGothic16 capitalize italic"
              >
                {errors.price?.message}
              </Typography>
            )}
          </div>
          {/* Food Description  */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-[#932584]">
              Description
            </label>
            <input
              name="description"
              className="block w-full px-4 py-10 text-[#932584] bg-[#f8d1e0] border border-[#932584] rounded-lg    focus:border-[#d92775] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#d92775] placeholder:text-[#d927754D]"
              type="text"
              placeholder="Enter Food Description"
              {...register("description", {
                required: {
                  value: true,
                  message: "Food Description is required.",
                },
                minLength: {
                  value: 20,
                  message:
                    "Food Description Should Have at least 20 characters",
                },
              })}
            />
            {errors.description && (
              <Typography
                variant="paragraph"
                className="text-[#d92775] font-DotGothic16 capitalize italic"
              >
                {errors.description?.message}
              </Typography>
            )}
          </div>

          <div className="mt-6 md:col-span-2">
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium tracking-wide text-pink-50 bg-[#932584] rounded-lg focus:outline-none uppercase"
            >
              Update
            </button>
          </div>
        </form>
        ;
      </Dialog>
    </div>
  );
};

const AddedFoodCard = () => {
  return (
    <div className="overflow-hidden bg-[#d927754D] rounded-lg hover:shadow-2xl">
      <img
        className="object-cover w-full h-48"
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
        alt="NIKE AIR"
      />
      <div className="px-4 py-2 text-center">
        <h1 className="text-xl font-bold text-[#932584] uppercase">NIKE AIR</h1>
        <ul className="mt-1 text-sm text-[#d92775]">
          <li>Category: Italian</li>
          <li>Food Origin: European</li>
          <li>Quantity: 20</li>
          <li>Price: $50</li>
        </ul>
      </div>

      <div className="flex items-center justify-center px-4 py-2 bg-[#d927754D]">
        <UpdateModal />
      </div>
    </div>
  );
};

export default AddedFoodCard;
