import axios from "axios";
import constants from "../Constants";

const url = constants.url;

export const sendMessage =
  (name, email, subject, message) => async (dispatch) => {
    try {
      dispatch({ type: "sendMessageRequest" });

      const { data } = await axios.post(
        `${url}/message/send`,
        {
          name,
          email,
          subject,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${document.cookie.split("=")[1]}`,
          },
        }
      );

      dispatch({
        type: "sendMessageSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "sendMessageFailure",
        payload: error.response?.data?.message,
      });
    }
  };
