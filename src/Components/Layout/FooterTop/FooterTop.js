import React from "react";
import Button from "../../Button/Button";

const FooterTop = () => {
  return (
    <section className="footerTop h-96 sm:h-[29rem] md:h-[34rem] lg:h-[60vh] min-h-fit lg flex justify-center items-center text-center  py-4">
      <div className=" w-11/12 md:w-3/4">
        <h1 className="font-bold text-[8vmin] leading-[8.5vmin] text-white drop-shadow-md">
          Your Health is Our First Priority
        </h1>
        <p className="p-4 py-8 text-gray-400 font-medium text-[3vmin]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          dignissimos aliquam iure aliquid fugiat quas nihil sint
          necessitatibus? Facilis{" "}
        </p>
        <div className="m-4">
          <Button name="Contact Us" to="/contact" />
        </div>
      </div>
    </section>
  );
};

export default FooterTop;
