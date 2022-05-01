import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const contactMessageReducer = createReducer(initialState, {
  // get All Contact Messages
  getContactMessageRequest: (state) => {
    state.loading = true;
  },
  getContactMessageSuccess: (state, action) => {
    state.loading = false;
    state.messages = action.payload;
  },
  getContactMessageFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // delete Contact Message
  deleteContactMessageRequest: (state) => {
    state.loading = true;
  },
  deleteContactMessageSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  deleteContactMessageFailure: (state, action) => {
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
