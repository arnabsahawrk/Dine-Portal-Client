import Gallery from "./Gallery";

const GallerySection = () => {
  return (
    <section className="bg-[#d927751A]">
      <div className="container mx-auto px-4 py-10 space-y-4 md:space-y-6">
        <h1 className="text-[#932584] text-center font-bold text-2xl md:text-4xl underline decoration-double">
          All Feedback
        </h1>
        <Gallery />
      </div>
    </section>
  );
};

export default GallerySection;
