import AddFoodForm from "./AddFoodForm";

const AddFoodSection = () => {
  return (
    <section className="container mx-auto px-4 py-10 space-y-4 md:space-y-6">
      <h1 className="text-[#932584] text-center font-bold text-2xl md:text-4xl underline decoration-double">
        Add Food
      </h1>
      <AddFoodForm />
    </section>
  );
};

export default AddFoodSection;
