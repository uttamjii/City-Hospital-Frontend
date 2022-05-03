import axios from "axios";
import constants from "../Constants";

const url = constants.url;

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginUserRequest" });

    const { data } = await axios.post(
      `${url}/user/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "loginUserSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "loginUserFailure",
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get(`${url}/user/loggeduser`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.split("=")[1]}`,
      },
    });

    dispatch({
      type: "loadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({ type: "loadUserFailure", payload: error.response.data.message });
  }
};

export const createUser =
  (name, email, password, confirmPassword, avatar) => async (dispatch) => {
    try {
      dispatch({ type: "createUserRequest" });

      const { data } = await axios.post(
        `${url}/user/create`,
        {
          name,
          email,
          password,
          confirmPassword,
          avatar,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "createUserSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "createUserFailure",
        payload: error.response?.data?.message,
      });
    }
  };

export const updateProfile = (name, email, avatar) => async (dispatch) => {
  try {
    console.log(document.cookie.split("=")[1]);
    dispatch({ type: "updateProfileRequest" });

    const { data } = await axios.put(
      `${url}/user/updateprofile`,
      {
        email,
        name,
        avatar,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
      }
    );

    dispatch({
      type: "updateProfileSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "updateProfileFailure",
      payload: error.response?.data?.message,
    });
  }
};

export const changePassword =
  (password, newPassword, confirmNewPassword) => async (dispatch) => {
    try {
      dispatch({ type: "changePasswordRequest" });

      const { data } = await axios.put(
        `${url}/user/changepassword`,
        {
          password,
          newPassword,
          confirmNewPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${document.cookie.split("=")[1]}`,
          },
        }
      );

      dispatch({
        type: "changePasswordSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "changePasswordFailure",
        payload: error.response?.data?.message,
      });
    }
  };

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "forgotPasswordRequest" });

    const { data } = await axios.post(
      `${url}/user/sendresetpasswordmail`,
      {
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "forgotPasswordSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "forgotPasswordFailure",
      payload: error.response.data.message,
    });
  }
};

export const resetPassword =
  (id, token, password, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: "resetPasswordRequest" });

      const { data } = await axios.put(
        `${url}/user/resetpassword/${id}/${token}`,
        {
          password,
          confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "resetPasswordSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "resetPasswordFailure",
        payload: error.response.data.message,
      });
    }
  };

export const deleteUserAccount = () => async (dispatch) => {
  try {
    dispatch({ type: "deleteAccountRequest" });
    console.log(document.cookie.split("=")[1]);

    const { data } = await axios.delete(`${url}/user/deleteaccount`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.split("=")[1]}`,
      },
    });

    dispatch({
      type: "deleteAccountSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "deleteAccountFailure",
      payload: error.response?.data?.message,
    });
  }
};

export const googleLogin = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const repone = await fetch(`${url}/auth/google/success`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true,
        Authorization: `Bearer ${document.cookie.split("=")[1]}`,
      },
      credentials: "include",
    });

    const data = await repone.json();

    if (data?.message === "Please login first") {
      return dispatch({ type: "addErrors", payload: "" });
    }

    dispatch({
      type: "loadUserSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "loadUserFailure",
      payload: error.response?.data?.message,
    });
  }
};
