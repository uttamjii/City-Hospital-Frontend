import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAppointment,
  getAllAdminAppointments,
} from "../../../Actions/appointmentAction";
import { EditRounded } from "@mui/icons-material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";

const AppointmentSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { appointments, loading } = useSelector(
    (state) => state.adminAppointments
  );
  const { message: deleteAppointmentMessage, error } = useSelector(
    (state) => state.forgotPassword
  );

  const [hideDeleteButton, setHideDeleteButton] = useState("");

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

  const deleteAppointmentHandler = async (id) => {
    setHideDeleteButton("hidden");
    await dispatch(deleteAppointment(id));
    dispatch(getAllAdminAppointments());
    setHideDeleteButton("");
  };

  const editStatusHandler = (id, status) => {
    let statusCap = status.slice(0, 1).toUpperCase() + status.slice(1);
    navigate(`updatestatus/${id}?status=${statusCap}`);
  };

  useEffect(() => {
    dispatch(getAllAdminAppointments());
  }, [dispatch]);

  useEffect(() => {
    if (deleteAppointmentMessage) {
      dispatch({
        type: "addMessageWhenLogin",
        payload: deleteAppointmentMessage,
      });
    }
    if (error) {
      dispatch({ type: "addErrors", payload: error });
      if (error.toLowerCase().trim() === "invalid token") {
        dispatch({ type: "clearAllDataIfNoCookie" });
      }
    }
  }, [deleteAppointmentMessage, dispatch, error]);

  return (
    <>
      <section className="min-h-fit pb-16  ">
        <div className=" p-14   hover:text-green-500  ">
          <div className="border-[2px] w-[10vmin] border-green-500 my-2"></div>
          <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md ">
            Appointments
          </h1>
        </div>

        <section className="min-h-fit  py-[1.8vmin] px-[2.3vmin] w-full sm:w-11/12 m-auto grid grid-cols-1   gap-8 place-items-center drop-shadow-md ">
          {loading && <Loader />}
          {appointments && appointments.length > 0 ? (
            appointments.map((appointmentData, index) => (
              <section
                className="p-4 space-y-3   w-full md:w-11/12 lg:w-11/12 min-h-fit h-fit  bg-white rounded-md shadow-2xl hover:shadow-inner"
                key={index}
              >
                <div className="flex justify-between items-center  py-2 px-2">
                  <h1 className="text-lg font-bold  drop-shadow-md rounded-[50%] bg-green-500 p-2 h-12 w-12 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white">
                    {appointments.length - index}
                  </h1>
                  <h1
                    className={`text-lg font-bold  drop-shadow-md rounded-[50%] bg-green-500 p-2 h-12 w-12 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white ${hideDeleteButton}`}
                    onClick={() => {
                      deleteAppointmentHandler(appointmentData._id);
                    }}
                  >
                    <DeleteIcon />
                  </h1>
                </div>

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

                <div className="grid girdColsAppoSectionAdmin sm:grid-cols-2">
                  <h1
                    className="text-lg font-bold   drop-shadow-md rounded-sm bg-green-500 p-2 m-2 h-12 w-12 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white"
                    title="Update Status"
                    onClick={() => {
                      editStatusHandler(
                        appointmentData?._id,
                        appointmentData?.status
                      );
                    }}
                  >
                    <EditRounded />
                  </h1>

                  {appointmentData.adminMessage?.adminName && (
                    <h1 className=" font-bold  drop-shadow-md rounded-sm bg-green-300 flex items-center justify-center m-2 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white">
                      <span>
                        {" "}
                        <AdminPanelSettingsIcon />{" "}
                        {appointmentData.adminMessage.adminName}
                      </span>
                    </h1>
                  )}
                </div>
              </section>
            ))
          ) : (
            <div className=" text-center text-2xl h-96 font-semibold text-gray-400 w-full py-8 translate-y-12">
              No Appointment Yet!
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default AppointmentSection;
