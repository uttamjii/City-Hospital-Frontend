import axios from "axios";
import constants from "../Constants";

const url = constants.url;

export const getAllContactMessages = () => {
  return async (dispatch) => {
    dispatch({ type: "getContactMessageRequest" });
    try {
      const response = await axios.get(`${url}/message/getall`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
      });
      dispatch({
        type: "getContactMessageSuccess",
        payload: response.data.messages,
      });
    } catch (error) {
      dispatch({
        type: "getContactMessageFailure",
        payload: error.response?.data?.message,
      });
    }
  };
};

export const deleteContactMessage = (id) => async (dispatch) => {
  dispatch({ type: "deleteContactMessageRequest" });
  try {
    const response = await axios.delete(`${url}/message/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.split("=")[1]}`,
      },
    });
    dispatch({
      type: "deleteContactMessageSuccess",
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteContactMessageFailure",
      payload: error.response?.data?.message,
    });
  }
};
