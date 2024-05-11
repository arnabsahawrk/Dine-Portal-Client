const PurchaseFood = () => {
  return (
    <div className="flex w-full max-w-xs mx-auto overflow-hidden bg-[#d927751A] rounded-lg shadow-lg  md:max-w-4xl">
      <div
        className="hidden bg-cover bg-center md:block md:w-1/2 relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-pink-50 bg-opacity-30"></div>
      </div>
      <div className="w-full md:w-1/2 overflow-hidden bg-[#d927751A] rounded-lg shadow-lg p-4">
        <p className="text-[#932584] font-bold underline decoration-double">
          Billing
        </p>
        <div className="px-4 py-2 text-center border-b border-[#932584] mb-2 text-[#d92775] font-bold">
          <p className="text-right font-medium">1-May-2024</p>
          <h1 className="text-xl font-bold text-[#932584] uppercase">
            NIKE AIR
          </h1>
          <p>Category: Italian</p>
          <p>Food Origin: BD</p>
          <p>Price: $300</p>
        </div>
        <div className="py-1 text-[#932584] text-center space-y-1">
          <p>Name: Arnab Saha</p>
          <p>Email: arnabsahawrk@gmail.com</p>
          <button className="px-4 py-2 text-base tracking-wide text-pink-50 bg-[#932584]  rounded-md font-bold">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseFood;
