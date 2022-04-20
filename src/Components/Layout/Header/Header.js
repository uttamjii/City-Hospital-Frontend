import React, { useState } from "react";
import HeaderTop from "./HeaderTop";
import ClearAllOutlinedIcon from "@mui/icons-material/ClearAllOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState("");
  const [headerFixed, setHeaderFixed] = useState("");
  const [logoCard, setLogoCard] = useState("");


  const toggleHam = () => {
    if (toggleMenu === "") {
      setToggleMenu("translateHam");
    } else {
      setToggleMenu("");
    }
  };

  window.addEventListener("scroll", () => {
    if (toggleMenu === "translateHam") {
      setToggleMenu("");
    }
    if (window.scrollY >= 47) {
      setHeaderFixed("headerFiexd");
      setLogoCard("logoCard");
    } else {
      setHeaderFixed("");
      setLogoCard("");
    }
  });

  return (
    <>
      <HeaderTop />
      <header
        className={`w-full h-24 bg-white flex justify-end items-center shadow-sm ${headerFixed}`}
      >

      {/* Logo */}
        <section
          className={`absolute left-4 lg:left-28 top-0 bg-white shadow-lg border-cyan-500 h-[9rem] md:h-[11rem] w-[15rem] rounded-b-md border-b-4  border-b-green-500 ${logoCard} transition-all`}
          
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

        <nav className="flex justify-around items-center h-full w-[62%] relative">
          <div className="text-black font-bold space-x-6 antialiased text-lg selection:text-green-500 mr-6 hidden lg:block ">
            <NavLink
              to="/"
              className="hover:text-green-500 transition-all"
              style={(navData) => ({
                color: navData.isActive ? "#22C55E" : "",
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-green-500 transition-all"
              style={(navData) => ({
                color: navData.isActive ? "#22C55E" : "",
              })}
            >
              {" "}
              About us
            </NavLink>
            <NavLink
              to="/services"
              className="hover:text-green-500 transition-all"
              style={(navData) => ({
                color: navData.isActive ? "#22C55E" : "",
              })}
            >
              {" "}
              Services
            </NavLink>
            <NavLink
              to="/doctors"
              className="hover:text-green-500 transition-all"
              style={(navData) => ({
                color: navData.isActive ? "#22C55E" : "",
              })}
            >
              {" "}
              Doctors
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-green-500 transition-all"
              style={(navData) => ({
                color: navData.isActive ? "#22C55E" : "",
              })}
            >
              {" "}
              Contact
            </NavLink>
            <NavLink
              to="/login"
              className="hover:text-green-500 transition-all"
              style={(navData) => ({
                color: navData.isActive ? "#22C55E" : "",
              })}
            >
              {" "}
            login
            </NavLink>
            {/* <NavLink
              to="/profile"
              className="hover:text-green-500 transition-all"
              style={(navData) => ({
                color: navData.isActive ? "#22C55E" : "",
              })}
            >
              {" "}
              Profile
            </NavLink> */}
          </div>
          <div
            className="lg:hidden cursor-pointer translate-x-[3rem] "
            onClick={toggleHam}
          >
            <ClearAllOutlinedIcon sx={{ fontSize: "3rem" }} />
          </div>
        </nav>
      </header>

      {/* Mobile Devices  Navbar */}

      <section
        className={` fixed top-0  right-0 min-h-screen h-screen w-screen sm:w-10/12 flex  justify-start flex-col space-y-7 text-2xl sm:text-3xl bg-white  text-black font-bold space-x-6 antialiased  selection:text-green-500 p-6 transition-all duration-[1.5s] translate-x-[100%] shadow-xl ${toggleMenu} z-[9999] `}
      >
        <div
          className="w-full text-right px-8 mt-12 cursor-pointer "
          onClick={toggleHam}
        >
          <ClearOutlinedIcon sx={{ fontSize: "3rem" }} />
        </div>
        <NavLink
          to="/"
          className="hover:text-green-500 transition-all "
          style={(navData) => ({
            color: navData.isActive ? "#22C55E" : "",
          })}
          onClick={toggleHam}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="hover:text-green-500 transition-all "
          style={(navData) => ({
            color: navData.isActive ? "#22C55E" : "",
          })}
          onClick={toggleHam}
        >
          {" "}
          About us
        </NavLink>
        <NavLink
          to="/services"
          className="hover:text-green-500 transition-all "
          style={(navData) => ({
            color: navData.isActive ? "#22C55E" : "",
          })}
          onClick={toggleHam}
        >
          {" "}
          Services
        </NavLink>

        <NavLink
          to="/doctors"
          className="hover:text-green-500 transition-all "
          style={(navData) => ({
            color: navData.isActive ? "#22C55E" : "",
          })}
          onClick={toggleHam}
        >
          {" "}
          Doctors
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:text-green-500 transition-all "
          style={(navData) => ({
            color: navData.isActive ? "#22C55E" : "",
          })}
          onClick={toggleHam}
        >
          {" "}
          Contact
        </NavLink>
        <NavLink
          to="/profile"
          className="hover:text-green-500 transition-all "
          style={(navData) => ({
            color: navData.isActive ? "#22C55E" : "",
          })}
          onClick={toggleHam}
        >
          {" "}
          Profile
        </NavLink>
        <NavLink
          to="/login"
          className="hover:text-green-500 transition-all "
          style={(navData) => ({
            color: navData.isActive ? "#22C55E" : "",
          })}
          onClick={toggleHam}
        >
          {" "}
          login / register
        </NavLink>
        <div className=" relative bottom-[-5rem] text-xl">
          <h1 className="font-bold  selection:text-green-500 flex  items-center w-full ">
            For Emergencies: +563 47558 623
          </h1>
          <NavLink
            to="/"
            className="hover:text-green-500 transition-all text--800"
            style={(navData) => ({
              color: navData.isActive ? "#22C55E" : "",
            })}
          >
            Request an Appointment
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Header;
