import FAQAccordion from "./FAQAccordion";
import FAQPicture from "./FAQPicture";

const FAQSection = () => {
  return (
    <section className="container mx-auto px-4 py-10 space-y-4 md:space-y-6">
      <h1 className="text-[#932584] text-center font-bold text-2xl md:text-4xl underline decoration-double">
        How To Get Started?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <FAQPicture />
        <FAQAccordion />
      </div>
    </section>
  );
};

export default FAQSection;
