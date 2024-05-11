const FoodDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Right Side  */}
      <div className="md:col-span-7 lg:col-span-8 xl:col-span-9 space-y-2 p-5 bg-[#d927751A] rounded-lg shadow-lg overflow-auto">
        <img
          className="w-full object-cover h-72 rounded-md"
          src="https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
          alt="Food Details"
        />
        <p className="text-[#d92775]">Added: 1-may-2024</p>
        <h1 className="text-[#932584] font-bold text-2xl lg:text-3xl">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-[#932584CC] text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In impedit,
          veniam recusandae optio enim neque necessitatibus soluta libero
          dolorem voluptates! Excepturi optio amet maiores dolores.
        </p>
        <p className="flex items-center gap-2 lg:gap-4 flex-wrap text-pink-50 text-xs md:text-sm">
          <span className="bg-[#932584] py-1 px-2 rounded-md font-bold">
            Category: Italian
          </span>
          <span className="bg-[#932584] py-1 px-2 rounded-md font-bold">
            Food Origin: BD
          </span>
        </p>
        <div>
          <img
            className="size-12 object-cover rounded-md"
            src="https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
            alt="Arnab Saha"
          />
          <h4 className="text-[#932584] font-semibold text-lg">
            Seller Details:
          </h4>
          <h4 className="text-[#d92775]">Name: Arnab Saha</h4>
          <h4 className="text-[#d92775]">Email: arnabsahawrk@gmail.com</h4>
        </div>
      </div>
      {/* Left Side  */}
      <div className="md:col-span-5 lg:col-span-4 xl:col-span-3 space-y-2 p-5 bg-[#d927751A] rounded-lg shadow-lg overflow-auto">
        <div className="bg-pink-50 p-4 rounded-md">
          <h4 className="text-[#932584] font-bold text-2xl lg:text-3xl">
            Foods
          </h4>
          <ul className="text-[#932584] text-lg font-bold space-y-2 overflow-auto max-h-[400px]">
            {[...Array(10).keys()].map((idx) => (
              <li key={idx} className="bg-[#d927751A] p-2 rounded-md">
                Lorem ipsum dolor sit amet.
              </li>
            ))}
          </ul>
        </div>
        <p>
          <span className="bg-[#932584] text-pink-50 rounded-md px-2 py-1 text-sm">
            Quantity: 5
          </span>
        </p>
        <p className="text-[#932584] font-bold text-3xl">Price: $300</p>
        <button className="w-full px-6 py-3 text-base tracking-wide text-pink-50 bg-[#932584]  rounded-md font-bold">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default FoodDetails;
