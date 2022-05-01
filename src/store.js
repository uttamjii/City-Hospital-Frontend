import { configureStore } from "@reduxjs/toolkit";
import { getAllUserAppointmentsReducer } from "./Reducers/appointmentReducer";
import { userReducer, sendEmailReducer } from "./Reducers/userReducer";
import { infoReducer } from "./Reducers/infoReducer";
import { contactMessageReducer } from "./Reducers/contactMessageReducer";
import {
  getAllAdminsReducer,
  getAllUsersReducer,
} from "./Reducers/adminUserReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: sendEmailReducer,
    userAppointments: getAllUserAppointmentsReducer,
    info: infoReducer,
    contactMessages: contactMessageReducer,
    users: getAllUsersReducer,
    admins: getAllAdminsReducer,
  },
});
