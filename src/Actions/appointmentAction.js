import axios from "axios";
import constants from "../Constants";

const url = constants.url;

export const createAppointment =
  (
    name,
    email,
    phone,
    appointmentDate,
    appointmentTime,
    gender,
    message,
    service,
    doctorId
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: "makeAppointmentRequest" });

      const { data } = await axios.post(
        `${url}/appointment/create`,
        {
          name,
          email,
          phone,
          appointmentDate,
          appointmentTime,
          gender,
          message,
          service,
          doctorId
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${document.cookie.split("=")[1]}`,
          },
        }
      );

      dispatch({
        type: "makeAppointmentSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "makeAppointmentFailure",
        payload: error.response?.data?.message,
      });
    }
  };

export const getAllUserAppointments = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllAppointmentsRequest" });

    const { data } = await axios.get(`${url}/appointment/getuserappointments`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.split("=")[1]}`,
      },
    });

    dispatch({
      type: "getAllAppointmentsSuccess",
      payload: data.appointments,
    });
  } catch (error) {
    dispatch({
      type: "getAllAppointmentsFailure",
      payload: error.response?.data?.message,
    });
  }
};

export const deleteAppointment = (appointmentId) => async (dispatch) => {
  try {
    dispatch({ type: "deleteAppointmentRequest" });

    const { data } = await axios.delete(
      `${url}/appointment/delete/${appointmentId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
      }
    );

    dispatch({
      type: "deleteAppointmentSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "deleteAppointmentFailure",
      payload: error.response?.data?.message,
    });
  }
};

///* Admin */

export const getAllAdminAppointments = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllAdminAppointmentsRequest" });

    const { data } = await axios.get(`${url}/appointment/getall`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.split("=")[1]}`,
      },
    });

    dispatch({
      type: "getAllAdminAppointmentsSuccess",
      payload: data.appointments,
    });
  } catch (error) {
    dispatch({
      type: "getAllAdminAppointmentsFailure",
      payload: error.response?.data?.message,
    });
  }
};

export const updateAppointmentStatus =
  (appointmentId, status, adminMessage) => async (dispatch) => {
    try {
      dispatch({ type: "UpdateAppointmentStatusRequest" });
      const { data } = await axios.put(
        `${url}/appointment/update/${appointmentId}`,
        {
          status,
          adminMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${document.cookie.split("=")[1]}`,
          },
        }
      );
      dispatch({
        type: "UpdateAppointmentStatusSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "UpdateAppointmentStatusFailure",
        payload: error.response?.data?.message,
      });
    }
  };
