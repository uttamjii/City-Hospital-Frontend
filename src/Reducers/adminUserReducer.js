import { createReducer } from "@reduxjs/toolkit";

// User State Reducer

const initialState = {};

export const getAllUsersReducer = createReducer(initialState, {
  //get All User Admin State
  getAllUsersRequest: (state) => {
    state.loading = true;
  },
  getAllUsersSuccess: (state, action) => {
    state.loading = false;
    state.users = action.payload;
  },
  getAllUsersFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // detete User and Admin State
  deleteUserAndAdminRequest: (state) => {
    state.loading = true;
  },
  deleteUserAndAdminSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  deleteUserAndAdminFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // Update User Role and Admin Role
  updateUserRoleAndAdminRoleRequest: (state) => {
    state.loading = true;
  },
  updateUserRoleAndAdminRoleSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  updateUserRoleAndAdminRoleFailure: (state, action) => {
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

export const getAllAdminsReducer = createReducer(initialState, {
  //get All User Admin State
  getAllAdminsRequest: (state, action) => {
    state.loading = true;
  },
  getAllAdminsSuccess: (state, action) => {
    state.loading = false;
    state.admins = action.payload;
  },
  getAllAdminsFailure: (state, action) => {
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
