import React from "react";
import Button from "../../Button/Button";

const FooterTop = () => {
  return (
    <section className="footerTop h-96 flex justify-center items-center text-center mt-[3rem]">
      <div className=" w-11/12 md:w-3/4">
        <h1 className="font-bold text-[8vmin] text-white drop-shadow-md">
          Your Health is Our First Priority
        </h1>
        <p className="pClass">
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
