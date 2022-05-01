import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderTop = () => {
  const { info } = useSelector((state) => state.info);

  return (
    <section className=" hidden md:block">
      <section className=" w-full h-12 bg-blue-900 flex justify-end items-center ">
        <div className="flex justify-around items-center h-full w-2/3 lg:w-[68.333333%] xl:w-10/12 text-sm ">
          <div className="space-x-8 text-white font-bold">
            <Link
              to="/services"
              className="hover:text-green-500 transition-all"
            >
              FAQ
            </Link>
            <Link
              to="/appointment"
              className="hover:text-green-500 transition-all"
            >
              Request an Appointment
            </Link>
          </div>
          <div className="h-full bg-red-500 text-white font-bold  selection:text-green-500 px-4 flex  items-center">
            <h1 className="inline-block">
              For Emergencies: + {info?.emergencyNumber || "Will Update Soon!"}
            </h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeaderTop;
