import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <>
      <section className="relative min-h-fit lg:h-screen bg-slate-500 flex justify-center  p-4 pt-[9rem] Footer">
        {/* 😊😊 Logo 😀 Start */}
        <section
          className={`absolute left-4 lg:left-28 top-0 bg-white shadow-lg border-cyan-500 h-[9rem] md:h-[11rem] w-4/5 lg:w-[22rem] rounded-b-md border-b-4  border-b-green-500  transition-all`}
        >
          <div className="flex justify-center items-center h-full w-full flex-col">
            <h1 className="antialiased font-bold text-2xl">
              <span className="text--900">City</span>
              <span className="text-green-500">Hospital</span>
              <span className="text-white px-1 bg-green-500 ">+</span>
            </h1>
            <h3 className="text-slate-500 font-semibold">Health Care Center</h3>
          </div>
        </section>
        {/* 😊😊 Logo 😀 End */}

        <section className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4 h-full w-full my-4  ">
          <section className=" first  w-full  h-4/5 min-h-fit flexColStart ">
            <h1 className="antialiased font-bold text-3xl text-white p-4 transition-all hover:text-blue-900">
              City Hospital
            </h1>
            <p className="pClass">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed earum
              dolore velit nulla libero natus.
            </p>
            <div className="flex justify-center items-center flex-wrap">
              <Link to="/">
                {" "}
                <FacebookIcon className="socialMediaIconAtFooter" />
              </Link>
              <Link to="/">
                <InstagramIcon className="socialMediaIconAtFooter" />
              </Link>
              <Link to="/">
                <LinkedInIcon className="socialMediaIconAtFooter" />
              </Link>
              <Link to="/">
                <TwitterIcon className="socialMediaIconAtFooter" />
              </Link>
            </div>
          </section>

          <section className="second  w-full h-4/5 min-h-fit-h flexColStart">
            <h1 className="antialiased font-bold text-3xl text-white p-4 transition-all hover:text-blue-900">
              Useful Links
            </h1>
            <Link to="/" className="footerLinks">
              <ArrowRightAltIcon /> Home
            </Link>
            <Link to="/contact" className="footerLinks">
              <ArrowRightAltIcon /> Contact Us
            </Link>
            <Link to="/services" className="footerLinks">
              <ArrowRightAltIcon /> Services
            </Link>
            <Link to="/appointment" className="footerLinks">
              <ArrowRightAltIcon /> Appointment
            </Link>
            <Link to="/about" className="footerLinks">
              <ArrowRightAltIcon /> About Us
            </Link>
            <Link to="/doctors" className="footerLinks">
              <ArrowRightAltIcon /> Doctors
            </Link>
          </section>
          <section className="third  w-full h-4/5 min-h-fit flexColStart">
            <h1 className="antialiased font-bold text-3xl text-white p-4 transition-all hover:text-blue-900">
              Services
            </h1>
            <Link to="/" className="footerLinks">
              <ArrowRightAltIcon /> Free Checkups
            </Link>
            <Link to="/" className="footerLinks">
              <ArrowRightAltIcon /> Screening Exams
            </Link>
            <Link to="/" className="footerLinks">
              <ArrowRightAltIcon /> Cardiology
            </Link>
            <Link to="/" className="footerLinks">
              <ArrowRightAltIcon /> Dentistry
            </Link>
            <Link to="/" className="footerLinks">
              <ArrowRightAltIcon /> X-ray
            </Link>
            <Link to="/" className="footerLinks">
              <ArrowRightAltIcon /> Neurology
            </Link>
          </section>
          <section className="fourth   w-full h-4/5 min-h-fit flexColStart">
            <h1 className="antialiased font-bold text-3xl text-white p-4 transition-all hover:text-blue-900">
              Have a Questions?
            </h1>
            <div className="footerAddressDivs">
              <LocationOnIcon /> 203 Fake St. Mountain View, San Francisco,
              California, USA
            </div>
            <div className="footerAddressDivs">
              <LocalPhoneIcon /> +2 392 3929 210
            </div>
            <div className="footerAddressDivs">
              <EmailIcon /> cityhospital@gmail.com
            </div>
          </section>
        </section>
      </section>

      <section className="bg-[#020523]  min-h-fit flex justify-around items-center flex-wrap ">
        <h1 className="p-4 text-gray-500 font-bold text-center ">
          Copyright ©2022 All rights reserved by City Hospital
        </h1>
        <div className="flex justify-center items-center flex-wrap space-x-4 text-green-500 ">
          <Link to="/">
            {" "}
            <FacebookIcon className="hover:text-white" />
          </Link>
          <Link to="/">
            <InstagramIcon className="hover:text-white" />
          </Link>
          <Link to="/">
            <LinkedInIcon className="hover:text-white" />
          </Link>
          <Link to="/">
            <TwitterIcon className="hover:text-white" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Footer;
