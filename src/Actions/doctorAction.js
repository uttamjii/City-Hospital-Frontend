import axios from "axios";
import constants from "../Constants";

const url = constants.url;

export const addNewDoctor = (doctor) => async (dispatch) => {
  try {
    dispatch({ type: "addNewDoctorRequest" });
    const response = await axios.post(
      `${url}/doctor/create`,
      { ...doctor },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
      }
    );
    dispatch({ type: "addNewDoctorSuccess", payload: response.data?.message });
  } catch (error) {
    dispatch({
      type: "addNewDoctorFailure",
      payload: error.response?.data?.message,
    });
  }
};

export const getAllDoctors = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllDoctorsRequest" });
    const response = await axios.get(`${url}/doctor/getall`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.split("=")[1]}`,
      },
    });
    dispatch({ type: "getAllDoctorsSuccess", payload: response.data?.doctors });
  } catch (error) {
    dispatch({
      type: "getAllDoctorsFailure",
      payload: error.response?.data?.message,
    });
  }
};

export const updateDoctor = (doctor, id) => async (dispatch) => {
  try {
    dispatch({ type: "updateDoctorRequest" });
    const response = await axios.put(
      `${url}/doctor/update/${id}`,
      { ...doctor },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
      }
    );
    dispatch({ type: "updateDoctorSuccess", payload: response.data?.message });
  } catch (error) {
    dispatch({
      type: "updateDoctorFailure",
      payload: error.response?.data?.message,
    });
  }
};

export const deleteDoctor = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteDoctorRequest" });
    const response = await axios.delete(`${url}/doctor/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.split("=")[1]}`,
      },
    });
    dispatch({ type: "deleteDoctorSuccess", payload: response.data?.message });
  } catch (error) {
    dispatch({
      type: "deleteDoctorFailure",
      payload: error.response?.data?.message,
    });
  }
};
