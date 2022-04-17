import React from "react";
import WhichPage from "../../Components/whichPageComponent/WhichPage";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import doctor from "../../images/doctor1.jpg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import patientImage from "../../images/doctor.jpg";

const About = () => {
  const patientTestimonials = [
    {
      name: "Dr. John Doe",
      designation: "Patient",
      image: patientImage,
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Dr. John Doe",
      designation: "Patient",
      image: patientImage,
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const directorAndManagement = [
    {
      name: "Dr. John Doe",
      designation: "Director",
      image: doctor,
      about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Praesentium suscipit architecto odio voluptates dicta molestias
      maxime dolori`,
    },
    {
      name: "Dr. John Doe",
      designation: "Vice Director",
      image: doctor,
      about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Praesentium suscipit architecto odio voluptates dicta molestias
      maxime dolori`,
    },
  ];

  return (
    <>
      <WhichPage whichPage="About" />

      <section className="min-h-fit  py-12 flex justify-center flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-0   ">
        <section className="w-full lg:w-3/5 h-full py-4 lg:pr-12 ">
          <div className=" py-4 ">
            <div className="border-[2px] w-[10vmin] border-green-500 "></div>
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
            <div className="border-[2px] w-[10vmin] border-green-500 "></div>
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

          {/* Director and Vice dicector */}
          <div className=" py-4 flex justify-center items-center flex-col sm:flex-row min-h-fit  ">
            {directorAndManagement.map((director, index) => (
              <div
                key={index}
                className="m-4 flex flex-col justify-center items-center   py-4 text-center shadow-md hover:-translate-y-2 transition-all duration-[0.7s] w-4/5 sm:w-[40%]"
              >
                <img
                  className="min-h-[16rem] h-[17rem] w-full p-2 object-cover object-top"
                  src={director.image}
                  alt={director.name}
                />
                <h1 className="font-semibold text-2xl py-3 drop-shadow ">
                  {director.name}
                </h1>
                <h3 className="font-medium text-base text-green-500">
                  {director.designation.toUpperCase()}
                </h3>
                <p className="p-4 text-gray-400 font-medium text-[3.3vmin]">
                  {director.about}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Three Cards Section 😀 */}

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

      {/* Patient Testimonials Section */}

      <section id='testimonials' className="min-h-fit py-12 px-4  patientTestinmonials flex justify-center">
        <section className="pt-8 h-10/12 w-full md:w-11/12 lg:p-4  ">
          <div className="border-[2px] w-[10vmin] border-green-500 "></div>
          <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md text-white hover:text-green-500 transition-all">
            Patient Testimonials
          </h1>
          <section className=" mt-8 grid grid-cols-1 lg:grid-cols-2  place-items-center gap-3">
            {patientTestimonials.map((testimonial, index) => (
              <div key={index} className="text-left p-4 w-full ">
                <span>
                  <FormatQuoteIcon className="p-2 bg-green-500 h-6 w-6 patientQuoteIcon" />
                </span>
                <p className=" text-[3vmin] font-semibold text-gray-400  py-4">
                  {testimonial.testimonial}
                </p>
                <div className="flex justify-start items-center py-4">
                  <img
                    className="w-16 h-16 rounded-full border-2 border-green-500 transition-all duration-[.5s] hover:scale-125 cursor-pointer"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <h1 className="px-4">
                    <span className="text-[3vmin] font-bold text-white hover:text-green-500 cursor-pointer">
                      {testimonial.name}{" "}
                    </span>
                    <span className="text-green-500 font-semibold text-[2.8vmin]">
                      {testimonial.designation}
                    </span>
                  </h1>
                </div>
              </div>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default About;
