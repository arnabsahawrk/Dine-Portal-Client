import { Dialog, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import useUpdateAddedFood from "../../hooks/TanstackQuery/useUpdateAddedFood";
import PostLoader from "../Loader/PostLoader";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AddedFoodCard = ({ food }) => {
  const { updateFoods, pendingFoods } = useUpdateAddedFood();
  const {
    _id,
    userName,
    userEmail,
    foodName,
    imageURL,
    foodCategory,
    foodOrigin,
    quantity,
    price,
    description,
    addedTime: currentTime,
    sold,
    userPic: picUser,
  } = food;
  //Modal Controller
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  //Input Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (e) => {
    const updatedTime = new Date().toLocaleString();
    let {
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

    quantity = parseFloat(quantity);
    price = parseFloat(price);

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
      addedTime: currentTime,
      updatedTime,
      sold,
      userPic: picUser,
    };

    try {
      await updateFoods({ _id, formData });
      toast.success("Food Updated Successfully.", {
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
    } catch {
      toast.error("Food Update Failed.", {
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
    handleOpen();
  };

  return (
    <div className="overflow-hidden bg-[#d927754D] rounded-lg hover:shadow-2xl">
      <Link to={`/allFoods/foodDetails/${_id}`}>
        <img
          className="object-cover w-full h-48"
          src={imageURL}
          alt={foodName}
        />
        <div className="px-4 py-2 text-center">
          <h1 className="text-xl font-bold text-[#932584] uppercase">
            {foodName}
          </h1>
          <ul className="mt-1 text-sm text-[#d92775]">
            <li>Category: {foodCategory}</li>
            <li>Food Origin: {foodOrigin}</li>
            <li>Quantity: {quantity}</li>
            <li>Price: ${price}</li>
          </ul>
        </div>
      </Link>

      <div className="flex items-center justify-center px-4 py-2 bg-[#d927754D]">
        {/* Edit Food  */}
        <div className="text-center">
          <button
            onClick={handleOpen}
            className="px-4 py-2 text-xs font-semibold text-pink-50 uppercase bg-[#932584] rounded-md"
          >
            Edit
          </button>
        </div>
        <Dialog
          size="lg"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none h-[450px] md:h-auto overflow-auto"
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
                defaultValue={userName}
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
                defaultValue={userEmail}
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
                defaultValue={foodName}
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
                    value: 20,
                    message: "Food Name should be in 20 characters",
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
                defaultValue={imageURL}
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
                defaultValue={foodCategory}
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
                defaultValue={foodOrigin}
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
                defaultValue={quantity}
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
                defaultValue={price}
                name="price"
                className="block w-full px-4 py-2 text-[#932584] bg-[#f8d1e0] border border-[#932584] rounded-lg    focus:border-[#d92775] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#d92775] placeholder:text-[#d927754D]"
                type="number"
                placeholder="Enter Food Price"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Food Price is required.",
                  },
                  min: {
                    value: 10,
                    message: "Price Shouldn't be less than $10.",
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
                defaultValue={description}
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
              {pendingFoods ? (
                <PostLoader />
              ) : (
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm font-medium tracking-wide text-pink-50 bg-[#932584] rounded-lg focus:outline-none uppercase"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </Dialog>
      </div>
    </div>
  );
};

AddedFoodCard.propTypes = {
  food: PropTypes.object.isRequired,
};

export default AddedFoodCard;
