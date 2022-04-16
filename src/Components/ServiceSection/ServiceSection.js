import React from "react";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import BiotechIcon from "@mui/icons-material/Biotech";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import NoiseAwareIcon from "@mui/icons-material/NoiseAware";
import PersonIcon from "@mui/icons-material/Person";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const ServiceSection = () => {
  const services = [
    {
      title: "Free Checkups",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inesse inventore error blanditiis laudantium non repudiandae,atque qui perspiciatisqfugiatneque impedit veniamdebitis.",
      icon: <BloodtypeIcon className="ServicesIcon" />,
    },
    {
      title: "Screening Exams",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inesse inventore error blanditiis laudantium non repudiandae,atque qui perspiciatisqfugiatneque impedit veniamdebitis.",
      icon: <ScreenshotMonitorIcon className="ServicesIcon" />,
    },
    {
      title: "Cardiology",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inesse inventore error blanditiis laudantium non repudiandae,atque qui perspiciatisqfugiatneque impedit veniamdebitis.",
      icon: <LocalHospitalIcon className="ServicesIcon" />,
    },
    {
      title: "Dentistry",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inesse inventore error blanditiis laudantium non repudiandae,atque qui perspiciatisqfugiatneque impedit veniamdebitis.",
      icon: <PersonIcon className="ServicesIcon" />,
    },
    {
      title: "X-ray",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inesse inventore error blanditiis laudantium non repudiandae,atque qui perspiciatisqfugiatneque impedit veniamdebitis.",
      icon: <NoiseAwareIcon className="ServicesIcon" />,
    },
    {
      title: "Neurology",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inesse inventore error blanditiis laudantium non repudiandae,atque qui perspiciatisqfugiatneque impedit veniamdebitis.",
      icon: <BiotechIcon className="ServicesIcon" />,
    },
  ];

  return (
    <section className=" min-h-fit py-4 w-screen flex justify-center  ">
      <section className=" w-[83%]">
        <div className=" py-14 ">
          <div className="border-[2px] w-[10vmin] border-green-500 "></div>
          <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md">
            Our Featured Services
          </h1>
        </div>

        <div className=" ">
          <div className="  w-full box-border  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-3">
            {services &&
              services.map((service, index) => (
                <ServiceCard service={service} key={index} />
              ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ServiceSection;
