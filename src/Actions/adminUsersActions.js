import axios from "axios";
import constants from "../Constants";

const url = constants.url;

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "getAllUsersRequest" });
  try {
    const res = await axios.get(`${url}/admin/getallusers`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.split("=")[1]}`,
      },
    });
    dispatch({ type: "getAllUsersSuccess", payload: res.data.users });
  } catch (error) {
    dispatch({
      type: "getAllUsersFailure",
      payload: error.response.data.message,
    });
  }
};

export const getAllAdmins = () => async (dispatch) => {
  dispatch({ type: "getAllAdminsRequest" });
  try {
    const res = await axios.get(`${url}/admin/getalladmins`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.split("=")[1]}`,
      },
    });
    dispatch({ type: "getAllAdminsSuccess", payload: res.data.admins });
  } catch (error) {
    dispatch({
      type: "getAllAdminsFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteUserAndAdmin = (id) => async (dispatch) => {
  dispatch({ type: "deleteUserAndAdminRequest" });
  try {
    const res = await axios.delete(`${url}/admin/deleteuser/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.split("=")[1]}`,
      },
    });
    dispatch({ type: "deleteUserAndAdminSuccess", payload: res.data?.message });
  } catch (error) {
    dispatch({
      type: "deleteUserAndAdminFailure",
      payload: error.response?.data?.message,
    });
  }
};

export const updateUserRoleAndAdminRole = (id, role) => async (dispatch) => {
  dispatch({ type: "updateUserRoleAndAdminRoleRequest" });
  try {
    const res = await axios.put(
      `${url}/admin/updaterole/${id}`,
      {
        role,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
      }
    );
    dispatch({
      type: "updateUserRoleAndAdminRoleSuccess",
      payload: res.data?.message,
    });
  } catch (error) {
    dispatch({
      type: "updateUserRoleAndAdminRoleFailure",
      payload: error.response?.data?.message,
    });
  }
};
