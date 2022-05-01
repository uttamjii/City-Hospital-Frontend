import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import WhichPage from "../../Components/whichPageComponent/WhichPage";

const AdminDashoard = () => {
  const links = [
    {
      name: "Info",
      link: "/admin/dashboard/info",
    },
    {
      name: "Users",
      link: "/admin/dashboard/users",
    },
    {
      name: "Doctors",
      link: "/admin/dashboard/doctors",
    },
    {
      name: "Appointments",
      link: "/admin/dashboard/appointments",
    },
    {
      name: "Contact Messages",
      link: "/admin/dashboard/contactmessages",
    },
  ];

  return (
    <>
      <WhichPage whichPage="Dashboard" />

      <section className=" lg:left-28 top-0 bg-white shadow-lg min-h-fit sm:h-[9rem]  w-screen flex flex-col sm:flex-row  justify-center items-between  sm:items-center text-black font-bold sm:space-x-6 antialiased text-lg selection:text-green-500 overflow-x-auto pl-6 py-6 sm:pl-0 sm:py-0 ">

        {links.map((link) => (
          <NavLink
            to={link.link}
            key={link.name}
            className="hover:text-green-500 text-gray-600 transition-all border-green-500 border-b-2 pb-1 border-opacity-0 hover:border-opacity-100 w-fit"
            style={(navData) => ({
              color: navData.isActive ? "#22C55E" : "",
              borderBottom: navData.isActive ? "2px solid #22C55E" : "",
            })}
          >
            {" "}
            {link.name}
          </NavLink>
        ))}
      </section>
      <Outlet />
    </>
  );
};

export default AdminDashoard;
