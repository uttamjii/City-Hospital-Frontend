import React from "react";
import DoctorSection from "../../Components/DoctorSection/DoctorSection";
import WhichPage from "../../Components/whichPageComponent/WhichPage";
import doctorUrl from "../../images/doctorAvatarPreview.png";
import ContactCardInfo from "../../Components/ContactCardInfo/ContactCardInfo";
import { useSelector } from "react-redux";

const Doctors = () => {
  const doctors = useSelector((state) => state.doctor.doctors);

  const doctorsArray = [];

  const editeNameHandler = (name) => {
    let nameEdit = name;

    const spliceName =
      name.slice(3).trim().slice(0, 1).toUpperCase() +
      name.slice(3).trim().slice(1);

    if (name.startsWith("Dr.")) {
      nameEdit = spliceName;
    }
    if (name.startsWith("dr.")) {
      nameEdit = spliceName;
    }
    if (name.startsWith("dr ")) {
      nameEdit = spliceName;
    }
    if (name.startsWith("dr")) {
      nameEdit =
        name.slice(2).trim().slice(0, 1).toUpperCase() +
        name.slice(2).trim().slice(1);
    }
    nameEdit =
      nameEdit.trim().slice(0, 1).toUpperCase() + nameEdit.trim().slice(1);

    return `Dr. ${nameEdit}`;
  };

  doctors &&
    doctors.forEach((doctor) => {

      doctorsArray.push({
        name: editeNameHandler(doctor.name),
        image: doctor?.avatar?.url || doctorUrl,
        description: doctor.description?.slice(0, 72) + "...",
        specialist: doctor.speciality,
        id: doctor._id,
      });


    });

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

        {doctorsArray.length > 0 && (
          <DoctorSection doctors={doctorsArray} title={false} />
        )}
      </section>

      {/* Contact Info Card */}

      <ContactCardInfo />
    </>
  );
};

export default Doctors;
