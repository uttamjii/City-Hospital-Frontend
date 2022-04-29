import { configureStore } from "@reduxjs/toolkit";
import { getAllUserAppointmentsReducer } from "./Reducers/appointmentReducer";
import { userReducer, sendEmailReducer } from "./Reducers/userReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: sendEmailReducer,
    userAppointments:getAllUserAppointmentsReducer,
  },
});
