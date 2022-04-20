import React from "react";
import WhichPage from "../../Components/whichPageComponent/WhichPage";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import ContactCardInfo from "../../Components/ContactCardInfo/ContactCardInfo";


const Contact = () => {


  return (
    <>
      <WhichPage whichPage="Contact" />

      <section className="py-12 px-4 lg:px-12 min-h-fit flex justify-center">
        <section className=" grid grid-cols-1 lg:grid-cols-2 place-items-center gap-6 w-full lg:w-11/12 py-12">
          {/* Info Section 😀😀 */}
          <section className="w-11/12  h-full">
            <div className=" p-4 ">
              <div className="py-4">
                <div className="border-[2px] w-[10vmin] border-green-500 "></div>
                <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md">
                  Get in touch
                </h1>
              </div>
              <p className="py-4 text-gray-400 font-medium text-[2.5vmin]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum.
                Nam consequat semper sollicitudin. Aliquam nec dapibus massa.
              </p>
              <div className="py-4">
                <p>
                  <PhoneInTalkOutlinedIcon className="contactPageIcons" />
                  <span className="font-semibold text-[3vmin]  text-gray-400 ml-2">
                    +45 677 8993000 223
                  </span>
                </p>
                <p>
                  <MailOutlineIcon className="contactPageIcons" />
                  <span className="font-semibold text-[3vmin] text-gray-400 ml-2">
                    office@template.com
                  </span>
                </p>
                <p>
                  <LocationOnOutlinedIcon className="contactPageIcons" />
                  <span className="font-semibold text-[3vmin] text-gray-400 ml-2">
                    Main Str. no 45-46, b3, 56832, Los Angeles, CA
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* Form Section 😎😎😎 */}
          <section className="w-11/12  h-full">
            <form action="" className=" p-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4">
                <input
                  className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <input
                type="text"
                className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
                placeholder="Subject"
              />

              <textarea
                className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all py-2 w-full outline-none h-[12rem]  resize-y  rounded-md"
                placeholder="Message"
              ></textarea>

              <div className="my-4 drop-shadow-sm ">
                <div className=" inline relative hoverEffect text-white  bg-blue-900  py-[1.7vmin] rounded-md ">
                  <button className="text-[2.5vmin] font-bold relative z-[3] w-full ">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </section>
        </section>

      </section>

      {/* Google Map */}

      <section className="pb-12 px-8 lg:px-16 min-h-fit flex justify-center h-96 lg:h-[34rem] lg:mx-12">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.565924625217!2d75.9196180268751!3d22.520463747448137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIndian%20Institute%20Of%20Technology%E2%80%93Indore%20(IIT%E2%80%93Indore)!5e0!3m2!1sen!2sin!4v1650384865315!5m2!1sen!2sin"
          title="google map"
          width="100%"
          height="100%"
          style={{ border: "0px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </section>



      {/* Contact Info Card */}

      <ContactCardInfo />





    </>
  );
};

export default Contact;
