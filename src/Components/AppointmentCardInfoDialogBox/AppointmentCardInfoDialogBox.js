import React, { useEffect } from "react";

const AppointmentCardInfoDialogBox = ({
  appointmentData,
  toggleRef,
  openInfoCard,
}) => {
  const closeHandler = () => {
    toggleRef.current.classList.toggle("-translate-y-[150%]");
  };



  const dateAppointment = (date) => {
    let dateAppointment = new Date(date);
    let day = dateAppointment.getDate();
    let month = dateAppointment.getMonth() + 1;
    let year = dateAppointment.getFullYear();

    let dateAppointmentString = day + "/" + month + "/" + year;
    return dateAppointmentString;
  };

  const timeAppointment = (getTime) => {
    let time = getTime?.split(":");

    let hour = time[0];
    let minutes = time[1];
    let ampm = hour >= 12 ? "PM" : "AM";

    if (hour > 12) {
      hour = hour - 12;
    }

    let timeAppointment = hour + ":" + minutes;
    return timeAppointment + " " + ampm;
  };

  // toggling the classlist of the dialog box it will run once because first time openInfoCard is value change
  useEffect(() => {
    if (openInfoCard) {
      toggleRef.current.classList.toggle("-translate-y-[150%]");
    }
  }, [openInfoCard, toggleRef]);

  const statusCardColorClassRender = (status) => {
    if (status === "pending") {
      return "text-yellow-400";
    } else if (status === "confirmed") {
      return "text-green-500";
    } else if (status === "cancelled") {
      return "text-red-500";
    } else if (status === "finished") {
      return "text-gray-500";
    }
  };

  return (
    <>
      {appointmentData && (
        <section
          className={`h-screen w-full min-h-fit fixed top-0 duration-500 -translate-y-[150%]   z-[1000] flex justify-center overflow-y-scroll bg-[#00000036]`}
          ref={toggleRef}
        >
          <section
            className="p-4 space-y-3   w-full md:w-10/12
           lg:w-8/12 min-h-fit h-fit  bg-white rounded-md shadow-2xl "
          >
            <div className="  flex flex-col items-center hover:text-green-500  ">
              <h1 className="text-[3.5vmin] font-semibold drop-shadow-md  ">
                Appointments Details
              </h1>
              <div className="border-b-[4px] w-[10vmin] border-green-500 my-2 "></div>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-3 ">
              <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  border-2 truncate">
                <span>
                  Name <span className="text-gray-400">:</span>{" "}
                </span>{" "}
                <span>{appointmentData?.name}</span>
              </h1>

              <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  border-2 truncate">
                <span>
                  Email <span className="text-gray-400">:</span>{" "}
                </span>{" "}
                <span>{appointmentData?.email}</span>
              </h1>
              <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  border-2">
                <span>
                  Gender <span className="text-gray-400">:</span>{" "}
                </span>{" "}
                <span>{appointmentData?.gender}</span>
              </h1>
              <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  border-2">
                <span>
                  Phone <span className="text-gray-400">:</span>
                </span>{" "}
                <span>{appointmentData?.phone}</span>
              </h1>
              {appointmentData?.appointmentTime && (
                <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  border-2">
                  <span>
                    Time <span className="text-gray-400">:</span>{" "}
                  </span>{" "}
                  <span>
                    {" "}
                    {timeAppointment(appointmentData?.appointmentTime)}
                  </span>
                </h1>
              )}
              <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  border-2">
                <span>
                  Date <span className="text-gray-400">:</span>{" "}
                </span>{" "}
                <span>
                  {" "}
                  {dateAppointment(appointmentData?.appointmentDate)}
                </span>
              </h1>
              <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  border-2">
                <span>
                  Status <span className="text-gray-400">:</span>{" "}
                </span>{" "}
                <span
                  className={`${statusCardColorClassRender(
                    appointmentData.status.toLowerCase()
                  )}`}
                >
                  {appointmentData?.status}
                </span>
              </h1>
              <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  border-2 ">
                <span>
                  Service <span className="text-gray-400">:</span>{" "}
                </span>{" "}
                <span>{appointmentData?.service}</span>
              </h1>

              {appointmentData?.doctorId?.name && (
                <>
                  <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  border-2">
                    <span>
                      Doctor <span className="text-gray-400">:</span>{" "}
                    </span>{" "}
                    <span>{appointmentData?.doctorId.name}</span>
                  </h1>
                </>
              )}

              {appointmentData?.doctorId?.speciality && (
                <>
                  <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  border-2">
                    <span>
                      Dr Speciality <span className="text-gray-400">:</span>{" "}
                    </span>{" "}
                    <span>{appointmentData?.doctorId.speciality}</span>
                  </h1>
                </>
              )}
            </section>

            <>
              {" "}
              {appointmentData?.message && (
                <>
                  <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  md:text-center border-2  overflow-hidden text-ellipsis">
                    <span>Message </span> <p>{appointmentData?.message}</p>
                  </h1>
                </>
              )}
              <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md md:text-center border-2  overflow-hidden text-ellipsis">
                <span>Hospital Message </span>{" "}
                <p>{appointmentData?.adminMessage.message}</p>
              </h1>
            </>

            <div className="my-4 drop-shadow-sm py-3 w-full  box-border">
              <div className=" inline relative hoverEffect text-white  bg-blue-900    py-[1.7vmin] rounded-md ">
                <button
                  type="submit"
                  className="text-[2.5vmin] font-bold relative z-[3] w-full "
                  onClick={closeHandler}
                >
                  Close
                </button>
              </div>
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default AppointmentCardInfoDialogBox;
