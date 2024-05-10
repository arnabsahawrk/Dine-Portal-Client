import KeyFeaturesCards from "./KeyFeaturesCards";

const KeyFeaturesSection = () => {
  return (
    <section className="bg-[#d927751A]">
      <div className="container mx-auto px-4 py-10 space-y-4 md:space-y-6">
        <h1 className="text-[#932584] text-center font-bold text-2xl md:text-4xl underline decoration-double">
          Explore Key Features
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <KeyFeaturesCards />
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
