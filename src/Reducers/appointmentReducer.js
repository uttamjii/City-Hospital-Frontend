import { createReducer } from "@reduxjs/toolkit";

// User State Reducer

const initialState = {};

export const getAllUserAppointmentsReducer = createReducer(initialState, {
  // Get All Appointments
  getAllAppointmentsRequest: (state) => {
    state.loading = true;
  },
  getAllAppointmentsSuccess: (state, action) => {
    state.loading = false;
    state.appointments = action.payload;
  },
  getAllAppointmentsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  
  // Clear data When User Logout
  clearAppointmentsData: (state) => {
    state.appointments = [];
    state.error = null;
    state.message = null;
  },  

  // Clear Errors
  clearErrors: (state) => {
    state.error = null;
  },
});

export const getAllAdminAppointmentsReducer = createReducer(initialState, {
  // Get All Appointments
  getAllAdminAppointmentsRequest: (state) => {
    state.loading = true;
  },
  getAllAdminAppointmentsSuccess: (state, action) => {
    state.loading = false;
    state.appointments = action.payload;
  },
  getAllAdminAppointmentsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // get Appointment by Admin Appointment Id
  UpdateAppointmentStatusRequest: (state) => {
    state.loading = true;
  },
  UpdateAppointmentStatusSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  UpdateAppointmentStatusFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  
  // Clear data When User Logout
  clearAppointmentsData: (state) => {
    state.appointments = [];
    state.error = null;
    state.message = null;
  },  

  // Clear Errors
  clearErrors: (state) => {
    state.error = null;
  },

  // Clear Messages
  clearMessages: (state) => {
    state.message = null;
  },
});

