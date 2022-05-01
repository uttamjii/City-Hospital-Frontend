import axios from "axios";
import constants from "../Constants";

const url = constants.url;

export const getAllBasicInfo = () => (dispatch) => {
  dispatch({ type: "getInfoRequest" });
  axios
    .get(`${url}/infodata/get`)
    .then((res) => {
      dispatch({ type: "getInfoSuccess", payload: res.data.infoData });
    })
    .catch((err) => {
      dispatch({
        type: "getInfoFailure",
        payload: err.response?.data?.message,
      });
    });
};

export const updateAllBasicInfo = (infoData) => async (dispatch) => {
  try {
    dispatch({ type: "updateInfoRequest" });
    const { data } = await axios.put(
      `${url}/infodata/update`,
      { ...infoData },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
      }
    );
    dispatch({ type: "updateInfoSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "updateInfoFailure",
      payload: error.response?.data?.message,
    });
  }
};
