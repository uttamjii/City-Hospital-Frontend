import React, { useState, useRef, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AppointmentCardInfoDialogBox from "../AppointmentCardInfoDialogBox/AppointmentCardInfoDialogBox";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAppointment,
  getAllUserAppointments,
} from "../../Actions/appointmentAction";

const AppointmentCard = ({ appointments }) => {
  const dispatch = useDispatch();
  const { message: deleteAppointmentMessage, error } = useSelector(
    (state) => state.forgotPassword
  );

  const dateAppointment = (date) => {
    let dateAppointment = new Date(date);
    let day = dateAppointment.getDate();
    let month = dateAppointment.getMonth() + 1;
    let year = dateAppointment.getFullYear();

    let dateAppointmentString = day + "/" + month + "/" + year;
    return dateAppointmentString;
  };

  const statusCardBgClassRender = (status) => {
    if (status === "pending") {
      return "bg-yellow-400";
    } else if (status === "confirmed") {
      return "bg-green-500";
    } else if (status === "cancelled") {
      return "bg-red-500";
    } else if (status === "finished") {
      return "bg-gray-500";
    }
  };

  const timeAppointment = (getTime) => {
    let time = getTime.split(":");

    let hour = time[0];
    let minutes = time[1];
    let ampm = hour >= 12 ? "PM" : "AM";

    if (hour > 12) {
      hour = hour - 12;
    }

    let timeAppointment = hour + ":" + minutes;
    return timeAppointment + " " + ampm;
  };

  const toggleRef = useRef();
  const [appointmentData, setAppointmentData] = useState(null);

  //this state is used to show the dialog box becuase first time click on the view button dialog doesn't show it no recronize the click classlist so we add this call by using state hook
  const [openInfoCard, setOpeninfoCard] = useState(null);

  const viewHandler = (id) => {
    toggleRef.current?.classList.toggle("-translate-y-[150%]");
    setOpeninfoCard("-translate-y-[150%]");
    setAppointmentData(
      appointments.find((appointment) => appointment._id === id)
    );
  };

  
  const [hideDeleteButton, setHideDeleteButton] = useState("");

  // Delete Appointment

  const deleteAppointmentHandler = async (id) => {
    setHideDeleteButton("hidden")
    await dispatch(deleteAppointment(id));
    await dispatch(getAllUserAppointments());
    setHideDeleteButton("");
  };

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
      {appointments && appointments.length > 0 ? (
        <>
          <section className=" min-h-fit max-h-[90vh] overflow-y-auto py-[1.8vmin] px-[2.3vmin] w-11/12 m-auto grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  place-items-center drop-shadow-md shadow-lg ">
            {appointments.map((appointment, index) => (
              <section
                className=" w-full min-h-[14rem] h-full  transition-all shadow-xl hover:shadow-inner bg-white   duration-500  rounded-md "
                key={index}
              >
                <div className="flex justify-between items-center  py-2 px-2">
                  <h1 className="text-lg font-bold  drop-shadow-md rounded-[50%] bg-green-500 p-2 h-12 w-12 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white">
                    {appointments.length - index}
                  </h1>
                  <h1
                    className={`text-lg font-bold  drop-shadow-md rounded-[50%] bg-green-500 p-2 h-12 w-12 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white ${hideDeleteButton}`}
                    onClick={() => {
                      deleteAppointmentHandler(appointment._id);
                    }}
                  >
                    <DeleteIcon />
                  </h1>
                </div>
                <div className="flex justify-around">
                  <h1 className="text-lg font-bold text-center text-gray-400">
                    {dateAppointment(appointment.appointmentDate)}
                  </h1>
                  {appointment.appointmentTime && (
                    <h1 className="text-lg font-bold text-center text-gray-400">
                      {timeAppointment(appointment.appointmentTime)}
                    </h1>
                  )}
                </div>
                <div className="flex justify-center items-center  py-2 px-2">
                  <div
                    className={`text-lg font-bold  drop-shadow-md rounded-[50%] p-3  hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white h-24 flex justify-center items-center flex-col ${statusCardBgClassRender(
                      appointment.status.toLowerCase()
                    )}`}
                  >
                    <h1>Status</h1>
                    <h1 className="text-base hover:text-green-500">
                      {appointment.status.toUpperCase()}
                    </h1>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <h1
                    className="text-lg font-bold  drop-shadow-md rounded-sm bg-green-500 p-2 m-2 h-12 w-12 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white"
                    title="View Details"
                    onClick={() => {
                      viewHandler(appointment._id);
                    }}
                  >
                    <RemoveRedEyeIcon />
                  </h1>
                  {appointment.doctorId && appointment.doctorId.name && (
                    <h1 className=" font-bold  drop-shadow-md rounded-sm bg-gray-300 flex items-center justify-center m-2 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white">
                      <span>{appointment.doctorId.name}</span>
                    </h1>
                  )}
                </div>
              </section>
            ))}
          </section>
        </>
      ) : (
        <div className=" text-center text-2xl font-semibold text-gray-400 w-full py-8 translate-y-12">
          No History Yet!
        </div>
      )}
      <AppointmentCardInfoDialogBox
        appointmentData={appointmentData}
        toggleRef={toggleRef}
        openInfoCard={openInfoCard}
      />
    </>
  );
};

export default AppointmentCard;
