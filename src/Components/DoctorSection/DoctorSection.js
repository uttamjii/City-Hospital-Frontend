import React from "react";

import DoctorCard from "../../Components/DoctorCard/DoctorCard";

const DoctorSection = ({ doctors, title }) => {
  return (
    <section className=" min-h-fit py-4 w-screen flex justify-center mb-[3rem] ">
      <section className=" w-[98%]  flex justify-center  flex-col items-center">
        {title && (
          <div className=" py-14 text-center w-9/12  ">
            <h1 className="text-[8vmin] font-bold drop-shadow-md leading-[8vmin]">
              Our Qualified Doctors
            </h1>
            <p className="p-4 text-gray-400 font-medium text-[3vmin]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optiore.
              Reiciendis optio recusandae exercitationem.
            </p>
          </div>
        )}

        <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-2">
          {doctors &&
            doctors.map((doctor, index) => (
              <DoctorCard doctor={doctor} key={index} />
            ))}
        </div>
      </section>
    </section>
  );
};

export default DoctorSection;
