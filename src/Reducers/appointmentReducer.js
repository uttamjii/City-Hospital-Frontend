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

