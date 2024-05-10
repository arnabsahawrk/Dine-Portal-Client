import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

const FAQAccordion = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <Accordion
        open={open === 1}
        className="mb-2 rounded-lg border border-[#932584] px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors text-[#932584] hover:!text-[#932584CC] text-lg lg:text-xl ${
            open === 1 ? "text-[#d92775] hover:!text-[#d92775CC]" : ""
          }`}
        >
          Account Creation
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-[#932584]">
          Begin by creating your account using either your email address or
          Google authentication. This step ensures that you have access to all
          the features and benefits Dine Portal has to offer.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className="mb-2 rounded-lg border border-[#932584] px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors text-[#932584] hover:!text-[#932584CC] text-lg lg:text-xl ${
            open === 2 ? "text-[#d92775] hover:!text-[#d92775CC]" : ""
          }`}
        >
          Explore Food Categories
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-[#932584]">
          Once you have successfully created your account, dive into the diverse
          array of food categories available on Dine Portal. From appetizers to
          desserts, explore and discover the flavors that tantalize your taste
          buds.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        className="mb-2 rounded-lg border border-[#932584] px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors text-[#932584] hover:!text-[#932584CC] text-lg lg:text-xl ${
            open === 3 ? "text-[#d92775] hover:!text-[#d92775CC]" : ""
          }`}
        >
          Add Foods to Your Collection
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-[#932584]">
          After selecting your preferred food categories, start curating your
          collection by adding foods and earning rewards. Whether it is a
          delectable dish or a refreshing beverage, add them to your collection
          for future enjoyment.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 4}
        className="rounded-lg border border-[#932584] px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`border-b-0 transition-colors text-[#932584] hover:!text-[#932584CC] text-lg lg:text-xl ${
            open === 4 ? "text-[#d92775] hover:!text-[#d92775CC]" : ""
          }`}
        >
          Purchase and Savor
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-[#932584]">
          Finally, indulge in the ultimate dining experience by purchasing your
          favorite foods from your curated collection. Sit back, relax, and
          savor every mouthful as you immerse yourself in the culinary delights
          offered by Dine Portal.
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
