import React from "react";
import { Link } from "react-router-dom";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import ServiceCard from "../Components/ServiceCard/ServiceCard";
import BiotechIcon from "@mui/icons-material/Biotech";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import NoiseAwareIcon from "@mui/icons-material/NoiseAware";
import PersonIcon from "@mui/icons-material/Person";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import doctorUrl from "../images/doctor1.jpg";
import DoctorCard from "../Components/DoctorCard/DoctorCard";

const Home = () => {
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

  const doctors = [
    {
      name: "Dr. John Doe",
      image: doctorUrl,
      description:
        " I am an ambitious workaholic, but apart from that, pretty simple person.",
      specialist: "Cardiology",
    },
    {
      name: "Dr. John Doe",
      image: doctorUrl,
      description:
        " I am an ambitious workaholic, but apart from that, pretty simple person.",
      specialist: "Cardiology",
    },
    {
      name: "Dr. John Doe",
      image: doctorUrl,
      description:
        " I am an ambitious workaholic, but apart from that, pretty simple person.",
      specialist: "Cardiology",
    },
    {
      name: "Dr. John Doe",
      image: doctorUrl,
      description:
        " I am an ambitious workaholic, but apart from that, pretty simple person.",
      specialist: "Cardiology",
    },
  ];

  return (
    <>
      {/* Home Page Top Section Or First Section */}
      <section className="bgHome h-[90vh] min-h-[90vh] flex justify-center text-center items-center md:justify-start md:text-left p-4 ">
        <div className=" w-5/6 md:w-[39.5rem] lg:w-[37rem]  md:translate-x-[1rem] lg:translate-x-[7rem] min-h-fit h-[24rem]">
          <h1 className="font-bold text-[2.8rem] leading-[3rem] text-center md:text-left sm:text-[4rem] sm:leading-[4rem] md:text-[4.8rem]  md:leading-[4.8rem] py-4">
            Medicine made with care
          </h1>
          <p className="py-4 text-gray-400 font-medium text-[3vmin]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempus vestibulum mauris quis aliquam. Integer accumsan sodales
            odio, id tempus velit ullamcorper id. Quisque at erat eu.
          </p>
          <div className="my-6">
            <div className=" inline relative hoverEffect text-white  bg-blue-900  font-bold text-base p-4 text-[3vmin] ">
              <Link to="/" className=" relative z-[3] ">
                Make an appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Home Page Top-Second Section Or Second Section */}

      <section
        id="a"
        className=" h-[77vh] sm:h-[100vh]  w-[100vw] flex justify-center  items-center px-8 pt-2 sm:p-4 min-h-fit"
      >
        <section className=" w-full lg:w-[90%]  h-full flex lg:justify-center  items-center  flex-col lg:flex-row">
          <div className="imageConatinertSection2Home w-full lg:w-96  h-[18rem]  sm:h-[28rem]  lg:h-full"></div>

          <div className="  content w-full h-3/5  lg:w-7/12 lg:h-full flex items-center justify-center lg:p-14 text-center lg:text-left md:px-[4rem] md:py-[1rem]">
            <div>
              <h1 className="text-[7vmin] leading-[7vmin] lg:text-[3.6rem] lg:leading-[4rem] font-bold my-4 antialiased">
                We Are{" "}
                <span className="text-green-500 drop-shadow-md">
                  City Hospital
                </span>{" "}
                A Medical Clinic
              </h1>
              <p className="my-4 text-[3vmin] text-gray-400 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                nihil rerum quis eos iusto assumenda recusandae natus ut ea,
                debitis tenetur quo ratione expedita perferendis, quae eaque
                perspiciatis dicta aut.
              </p>
              <div className="my-4  mt-[2rem] space-x-4  flex flex-wrap items-center justify-center lg:justify-start lg:flex-none lg:space-x-4 lg:w-[124%] ">
                <div className=" inline relative hoverEffect text-white  bg-blue-900  font-bold text-base p-[2.5vmin] text-[3vmin] ">
                  <Link to="/" className=" relative z-[3] ">
                    Make an appointment
                  </Link>
                </div>
                <div className=" inline relative hoverEffect text-white  bg-blue-900  font-bold text-base p-[2.5vmin] text-[3vmin]">
                  <Link to="/contact" className=" relative z-[3] ">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Home Page Top-Third Section Or Third Section 😊 Sevices Section */}

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

      {/* Home Page Top-Fourth Section Or Fourth Section 😊 Doctor Section */}

      <section className=" min-h-fit py-4 w-screen flex justify-center ">
        <section className=" w-[98%]  flex justify-center  flex-col items-center">
          <div className=" py-14 text-center w-9/12  ">
            <h1 className="text-[8vmin] font-bold drop-shadow-md leading-[8vmin]">
              Our Qualified Doctors
            </h1>
            <p className="p-4 text-gray-400 font-medium text-[3vmin]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optiore.
              Reiciendis optio recusandae exercitationem.
            </p>
          </div>

          <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-2">
            {doctors &&
              doctors.map((doctor, index) => (
                <DoctorCard doctor={doctor} key={index} />
              ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
