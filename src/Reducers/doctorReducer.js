import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const doctorReducer = createReducer(initialState, {
  // Add new Doctor
  addNewDoctorRequest: (state) => {
    state.loading = true;
  },
  addNewDoctorSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  addNewDoctorFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // Get all Doctors
  getAllDoctorsRequest: (state) => {
    state.loading = true;
  },
  getAllDoctorsSuccess: (state, action) => {
    state.loading = false;
    state.doctors = action.payload;
  },
  getAllDoctorsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // Update doctor
  updateDoctorRequest: (state) => {
    state.loading = true;
  },
  updateDoctorSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  updateDoctorFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // Delete doctor
  deleteDoctorRequest: (state) => {
    state.loading = true;
  },
  deleteDoctorSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  deleteDoctorFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
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
