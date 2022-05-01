import React from "react";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PublicIcon from "@mui/icons-material/Public";
import TelegramIcon from "@mui/icons-material/Telegram";
import PushPinIcon from "@mui/icons-material/PushPin";
import { useSelector } from "react-redux";

const ContactCardInfo = () => {
  const { info } = useSelector((state) => state.info);

  const contactCardInfo = [
    {
      title: "ADDRESS",
      icon: <PushPinIcon className="contactCardInfoIcon" />,
      description: info?.address || "Will Update Soon!",
    },

    {
      title: "CONTACT NUMBER",
      icon: <LocalPhoneIcon className="contactCardInfoIcon" />,
      description: "+" + info?.phoneNumber || "Will Update Soon!",
    },

    {
      title: "EMAIL ADDRESS",
      icon: <TelegramIcon className="contactCardInfoIcon" />,
      description: info?.email || "Will Update Soon!",
    },
    {
      title: "WEBSITE",
      icon: <PublicIcon className="contactCardInfoIcon" />,
      description: window.location.host || "Will Update Soon!",
    },
  ];

  return (
    <>
      {/* Contact Info Card */}

      <section className="py-12 px-4 lg:px-12 min-h-fit flex justify-center">
        <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center w-11/12 text-center ">
          {contactCardInfo.map((info, index) => (
            <section
              key={index}
              className="w-full py-8 px-2 h-full flex justify-center items-center flex-col bg-slate-100 shadow-md hover:-translate-y-2 transition-all duration-[0.7s]"
            >
              <div className="p-8 rounded-full bg-white">{info.icon}</div>
              <h1 className="text-xl font-semibold py-4">{info.title}</h1>
              <p className="text-lg font-semibold px-3 text-gray-400 text-center">
                {info.description}
              </p>
            </section>
          ))}
        </section>
      </section>
    </>
  );
};

export default ContactCardInfo;
