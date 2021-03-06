import React from "react";
import Button from "../Button/Button";

const DoctorCard = ({ doctor }) => {
  return (
    doctor && (
      <div className="doctorCard flex flex-col justify-center items-center w-full  py-4 text-center shadow-md hover:-translate-y-2 transition-all duration-[0.7s]">
        <img
          className="min-h-[16rem] h-[17rem] w-full p-2 object-cover object-top"
          src={doctor.image}
          alt={doctor.name}
        />
        <h1 className="font-semibold text-2xl py-3 drop-shadow ">
          {doctor.name}
        </h1>
        <h3 className="font-medium text-base text-green-500">
          {doctor.specialist.toUpperCase()}
        </h3>
        <p className="p-4 text-gray-400 font-medium text-lg">
          {doctor.description}
        </p>
        {doctor?.available === "YES" ? (
          <Button to={`/appointment/${doctor?.id}`} name="Book Now" />
        ) : (
          <div className=" inline relative hoverEffect text-gray-200 hover:text-red-200  bg-blue-900  font-bold py-[2vmin] px-[2.5vmin] text-[2.5vmin]">
            <div className=" relative z-[3]  ">Unavailable</div>
          </div>
        )}
      </div>
    )
  );
};

export default DoctorCard;
