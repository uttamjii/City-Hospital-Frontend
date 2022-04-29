import { createReducer } from "@reduxjs/toolkit";

// User State Reducer

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, {
  // Login User
  loginUserRequest: (state) => {
    state.loading = true;
  },
  loginUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  loginUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  // Creaet User
  createUserRequest: (state) => {
    state.loading = true;
  },
  createUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  createUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  // Load User
  loadUserRequest: (state) => {
    state.loading = true;
  },
  loadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  loadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  // Update Profile
  updateProfileRequest: (state) => {
    state.loading = true;
  },
  updateProfileSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  updateProfileFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // Change Password
  changePasswordRequest: (state) => {
    state.loading = true;
  },
  changePasswordSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  changePasswordFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //Logout Users

  logoutUser: (state) => {
    state.loading = false;
    state.user = { message: "Logout Successfully" };
    state.isAuthenticated = false;
  },

  // delete Account
  deleteAccountRequest: (state) => {
    state.loading = true;
  },
  deleteAccountSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = false;
  },
  deleteAccountFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //ADD ERROR
  addErrors: (state, action) => {
    state.error = action.payload;
  },

  // Clear Errors
  clearErrors: (state) => {
    state.error = null;
  },

  //ADD MESSAGE
  addMessage: (state, action) => {
    state.user = { message: action.payload };
  },

  //ADD MESSAGE
  addMessageWhenLogin: (state, action) => {
    state.user.message = action.payload;
  },
  // CLEAR Messages
  clearMessages: (state) => {
    state.user.message = null;
  },

  // Clear All Data from State if User Cookie is Deleted
  clearAllDataIfNoCookie: (state) => {
    state.user = {};
    state.isAuthenticated = false;
  },
});

// Send Email or Forgot Password Reducer
// Send Message Reducer or Conatct Message Reducer

export const sendEmailReducer = createReducer(initialState, {
  // Change Password Mail
  forgotPasswordRequest: (state) => {
    state.loading = true;
  },
  forgotPasswordSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },
  forgotPasswordFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  // Reset Password
  resetPasswordRequest: (state) => {
    state.loading = true;
  },
  resetPasswordSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },
  resetPasswordFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // Send Message or Conatct Message
  sendMessageRequest: (state) => {
    state.loading = true;
  },
  sendMessageSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },
  sendMessageFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // Make a Appointment or Contact Appointment
  makeAppointmentRequest: (state) => {
    state.loading = true;
  },
  makeAppointmentSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },
  makeAppointmentFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // Delete Appointment or Contact Appointment
  deleteAppointmentRequest: (state) => {
    state.loading = true;
  },
  deleteAppointmentSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },
  deleteAppointmentFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // Clear Errors
  clearErrors: (state) => {
    state.error = null;
  },
  // CLEAR Messages
  clearMessages: (state) => {
    state.message = null;
  },
});
