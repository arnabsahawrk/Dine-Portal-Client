import EmptyPicture from "./EmptyPicture";

const EmptyFoods = () => {
  return (
    <section className="container mx-auto px-4 py-10 space-y-4 md:space-y-6">
      <EmptyPicture />
      <h1 className="text-[#932584] text-center font-bold text-lg md:text-2xl underline decoration-dotted capitalize">
        No Food Is Available On This Search Result.
      </h1>
    </section>
  );
};

export default EmptyFoods;
