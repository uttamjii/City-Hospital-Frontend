import React from "react";
import DoctorSection from "../../Components/DoctorSection/DoctorSection";
import WhichPage from "../../Components/whichPageComponent/WhichPage";
import doctorUrl from "../../images/doctor1.jpg";
import ContactCardInfo from "../../Components/ContactCardInfo/ContactCardInfo";

const Doctors = () => {
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
      <section>
        <WhichPage whichPage="Doctors" />

        <div className=" py-14 ml-8 sm:ml-[5.4rem]  hover:text-green-500">
          <div className="border-[2px] w-[10vmin] border-green-500 my-2"></div>
          <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md">
            Our Featured Doctors
          </h1>
        </div>

        <DoctorSection doctors={doctors} title={false} />
      </section>



      {/* Contact Info Card */}

      <ContactCardInfo />

    </>
  );
};

export default Doctors;
