import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, name }) => {
  return (
    <div className=" inline relative hoverEffect text-white  bg-blue-900  font-bold py-[2vmin] px-[2.5vmin] text-[2.5vmin]">
      <Link to={to ? to : "/"} className=" relative z-[3] ">
        {name}
      </Link>
    </div>
  );
};

export default Button;
