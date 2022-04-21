import React from "react";
import { Link } from "react-router-dom";

const WhichPage = ({ whichPage }) => {
  const page = whichPage.toLowerCase();

  return (
    <section
      className={` h-[12rem] sm:h-[18rem] w-full flex justify-center items-center flex-col  ${
        page === "contact"
          ? "whichPageContact"
          : page === "services"
          ? "whichPageServices"
          : page === "doctors"
          ? "whichPageDoctors"
          : page === "about"
          ? "whichPageAbout"
          : page === "login"
          ? "whichPageLogin"
          : page === "sign up"
          ? "whichPageSignUp"
          : "whichPage"
      }`}
    >
      <div className="w-10/12 space-y-3">
        <h1>
          <span className="text-[5vmin] font-extrabold text-green-500 drop-shadow-xl">
            {" "}
            City Hospital{" "}
          </span>{" "}
          <span className="text-[5vmin] font-extrabold text-white ">
            {" "}
            {whichPage}
          </span>
        </h1>
        <h1 className="text-[3vmin] font-bold text-gray-400">
          <Link to="/" className="hover:text-green-500">
            Home
          </Link>{" "}
          / <span>{whichPage}</span>
        </h1>
      </div>
    </section>
  );
};

export default WhichPage;
