import React from "react";
import WhichPage from "../../Components/whichPageComponent/WhichPage";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import doctor from "../../images/doctor1.jpg";

const About = () => {
  return (
    <>
      <WhichPage whichPage="About" />

      <section className="min-h-fit  py-12 flex justify-center flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-0   ">
        <section className="w-full lg:w-3/5 h-full py-4 lg:pr-12 ">
          <div className=" py-4 ">
            <div className=" w-[10vmin]  "></div>
            <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md">
              We Are City Hospital A Medical Clinic
            </h1>
            <p className="py-4 text-gray-400 font-medium text-[2.5vmin]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tempus vestibulum mauris quis aliquam. Integer accumsan sodales
              odio, id tempus velit ullamcorper id. Quisque at erat eu. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus
              vestibulum mauris quis aliquam. Integer accumsan sodales odio, id
              tempus velit ullamcorper id. Quisque at erat eu. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Mauris tempus vestibulum
              mauris quis aliquam. Integer accumsan sodales odio, id tempus
              velit ullamcorper id. Quisque at erat eu. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris
              quis aliquam. Integer accumsan sodales odio, id tempus velit
              ullamcorper id. Quisque at erat eu.
            </p>
          </div>
          <div className=" py-4 ">
            <div className=" w-[10vmin]  "></div>
            <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md">
              A great medical team to help your needs
            </h1>
            <p className="py-4 text-gray-400 font-medium text-[2.5vmin]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tempus vestibulum mauris quis aliquam. Integer accumsan sodales
              odio, id tempus velit ullamcorper id. Quisque at erat eu. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus
              vestibulum mauris quis aliquam. Integer accumsan sodales odio, id
              tempus velit ullamcorper id. Quisque at erat eu. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Mauris tempus vestibulum
              mauris quis aliquam. Integer accumsan sodales odio, id tempus
              velit ullamcorper id. Quisque at erat eu. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris
              quis aliquam. Integer accumsan sodales odio, id tempus velit
              ullamcorper id. Quisque at erat eu.
            </p>
          </div>
          <div className=" py-4 flex justify-center items-center flex-col sm:flex-row min-h-fit  ">
            <div className="m-4 flex flex-col justify-center items-center   py-4 text-center shadow-md hover:-translate-y-2 transition-all duration-[0.7s] w-4/5 sm:w-[40%]">
              <img
                className="min-h-[16rem] h-[17rem] w-full p-2 object-cover object-top"
                src={doctor}
                alt="doctor"
              />
              <h1 className="font-semibold text-2xl py-3 drop-shadow ">
                Dr. John Doe
              </h1>
              <h3 className="font-medium text-base text-green-500">DIRECTOR</h3>
              <p className="p-4 text-gray-400 font-medium text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium suscipit architecto odio voluptates dicta molestias
                maxime dolori
              </p>
            </div>

            <div className="m-4 flex flex-col justify-center items-center  py-4 text-center shadow-md hover:-translate-y-2 transition-all duration-[0.7s] w-4/5 sm:w-[40%]">
              <img
                className="min-h-[16rem] h-[17rem] w-full p-2 object-cover object-top"
                src={doctor}
                alt="doctor"
              />
              <h1 className="font-semibold text-2xl py-3 drop-shadow ">
                Dr. John Doe
              </h1>
              <h3 className="font-medium text-base text-green-500">
                VICE DIRECTOR
              </h3>
              <p className="p-4 text-gray-400 font-medium text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium suscipit architecto odio voluptates dicta molestias
                maxime dolori
              </p>
            </div>
          </div>
        </section>

        <section className="w-full lg:w-4/12 h-full p-4 space-y-8 lg:sticky lg:top-20">
          <div className=" w-full lg:w-11/12  min-h-fit px-6 py-4 bg-blue-900 border-b-4 border-green-500 hover:shadow-2xl transition-all duration-[0.5s] cursor-pointer">
            <div className="">
              <AccessAlarmIcon className="socialMediaIconAtFooter" />
            </div>
            <h1 className="text-2xl font-bold text-white py-4">
              Working Hours
            </h1>
            <div className="text-gray-400 font-semibold  grid grid-cols-2 place-items-center gap-4">
              <div className="w-full">
                <h3 className="mr-12">Mon – Fri</h3>
                <h3 className="mr-12">Saturday</h3>
                <h3 className="mr-12">Sunday</h3>
              </div>
              <div className="w-full">
                <h3>9:00 am – 5:00 pm</h3>
                <h3>9:00 am – 5:00 pm</h3>
                <h3>9:00 am – 5:00 pm</h3>
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-11/12  min-h-fit px-6 py-4 bg-blue-900 border-b-4 border-green-500 hover:shadow-2xl transition-all duration-[0.5s] cursor-pointer">
            <div className="">
              <PhoneInTalkIcon className="socialMediaIconAtFooter" />
            </div>
            <h1 className="text-2xl font-bold text-white py-4">Appointments</h1>
            <p className="text-gray-400 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ante leo, finibus quis est ut, tempor tincidunt ipsum.
            </p>
          </div>
          <div className=" w-full lg:w-11/12  min-h-fit px-6 py-4 bg-blue-900 border-b-4 border-green-500 hover:shadow-2xl transition-all duration-[0.5s] cursor-pointer">
            <div className="">
              <NotificationsActiveIcon className="socialMediaIconAtFooter" />
            </div>
            <h1 className="text-2xl font-bold text-white py-4">
              Emergency Cases
            </h1>
            <h1 className="text-2xl font-bold text-green-500 pb-3">
              +56 273 45678 235
            </h1>
            <p className="text-gray-400 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ante leo.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
