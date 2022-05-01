import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const infoReducer = createReducer(initialState, {
  // get all basic  information
  getInfoRequest: (state) => {
    state.loading = true;
  },
  getInfoSuccess: (state, action) => {
    state.loading = false;
    state.info = action.payload;
  },
  getInfoFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // Update information
  updateInfoRequest: (state) => {
    state.loading = true;
  },
  updateInfoSuccess: (state, action) => {
    state.loading = false;
    state.info = action.payload.infoData;
    state.message = action.payload.message;
  },
  updateInfoFailure: (state, action) => {
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
