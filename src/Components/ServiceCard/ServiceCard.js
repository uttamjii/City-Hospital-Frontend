import React from "react";

const ServiceCard = ({service}) => {
  return (
    <div
      className=" ServiceCard w-full min-h-full  flex justify-center flex-col text-center p-4 shadow-md hover:bg-blue-900 hover:border-b-4 hover:border-green-500 box-border transition-all duration-[0.7s]"
    >
      <div className="flex justify-center flex-col items-center space-y-3 p-4">
        {service.icon && service.icon}
        <div className="border-[2px] w-[10vmin] border-green-500 "></div>
      </div>
      <h1 className="text-[2rem] font-bold drop-shadow">{service.title}</h1>
      <p className="p-4 text-gray-400 font-medium">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
