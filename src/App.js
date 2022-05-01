import Header from "./Components/Layout/Header/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useEffect } from "react";
import Home from "./Pages/Home/Home.js";
import FooterTop from "./Components/Layout/FooterTop/FooterTop.js";
import Footer from "./Components/Layout/Footer/Footer.js";
import About from "./Pages/About/About.js";
import Service from "./Pages/Services/Services.js";
import Doctors from "./Pages/Doctors/Doctors.js";
import Contact from "./Pages/Contact/Contact.js";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.js";
import Login from "./Pages/Login/Login.js";
import SignUp from "./Pages/SignUp/SignUp.js";
import Profile from "./Pages/Profile/Profile.js";
import EditProfile from "./Pages/EditProfile/EditProfile.js";
import ChangePassword from "./Pages/ChangePassword/ChangePassword.js";
import ErrorCard from "./Components/ErrorCard/ErrorCard.js";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Actions/userActions";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword.js";
import ResetPassword from "./Pages/ResetPassword/ResetPassword.js";
import MakeAppointment from "./Pages/MakeAppointment/MakeAppointment.js";
import DashBoardAdminIcon from "./Components/DashBoardAdminIcon/DashBoardAdminIcon.js";
import AdminDashoard from "./Pages/AdminDashboard/AdminDashoard.js";
import InfoSection from "./Pages/AdminDashboard/InfoSection/InfoSection.js";
import { getAllBasicInfo } from "./Actions/infoAction.js";
import UserSection from "./Pages/AdminDashboard/UserSection/UserSection.js";
import DoctorsSection from "./Pages/AdminDashboard/DoctorsSection/DoctorsSection.js";
import AppointmentSection from "./Pages/AdminDashboard/AppointmentSection/AppointmentSection.js";
import ContactMessageSection from "./Pages/AdminDashboard/ContactMessageSection/ContactMessageSection.js";
import UpdateUserRole from "./Pages/AdminDashboard/UserSection/UpdateUserRole/UpdateUserRole.js";

const App = () => {
  const dispatch = useDispatch();
  const { error, user, isAuthenticated } = useSelector((state) => state.user);
  const { error: forgotPasswordError, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (document.cookie.split("=")[1] !== undefined) {
      dispatch(loadUser());
    } else {
      dispatch({ type: "clearAllDataIfNoCookie" });
    }
    dispatch(getAllBasicInfo());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch({ type: "clearErrors" });
      }, 5000);
    }
    if (user?.message) {
      setTimeout(() => {
        dispatch({ type: "clearMessages" });
      }, 5000);
    }
    if (forgotPasswordError) {
      setTimeout(() => {
        dispatch({ type: "clearErrors" });
      }, 5000);
    }
    if (message) {
      setTimeout(() => {
        dispatch({ type: "clearMessages" });
      }, 5000);
    }

    if (user) {
      if (user?.token) {
        document.cookie = `token=${user.token}`;
      }
    }
  }, [error, user, dispatch, forgotPasswordError, message]);

  return (
    <BrowserRouter>
      <Header />
      {isAuthenticated && user.role === "admin" ? <DashBoardAdminIcon /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<MakeAppointment />} />

        {isAuthenticated && user.role === "admin" ? (
          <Route path="/admin/dashboard" element={<AdminDashoard />}>
            <Route index element={<InfoSection />} />
            <Route path="info" element={<InfoSection />} />
            <Route path="users" element={<UserSection />} />
            <Route path="users/updaterole/:id" element={<UpdateUserRole />} />
            <Route path="doctors" element={<DoctorsSection />} />
            <Route path="appointments" element={<AppointmentSection />} />
            <Route path="contactmessages" element={<ContactMessageSection />} />
          </Route>
        ) : null}

        <Route
          path="/forgotpassword"
          element={isAuthenticated ? <Home /> : <ForgotPassword />}
        />

        <Route
          path="/resetpassword/:id/:token"
          element={isAuthenticated ? <Home /> : <ResetPassword />}
        />

        <Route path="/login" element={isAuthenticated ? <Home /> : <Login />} />
        <Route
          path="/signup"
          element={isAuthenticated ? <Home /> : <SignUp />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Login />}
        />
        <Route
          path="/profile/editprofile"
          element={isAuthenticated ? <EditProfile /> : <Login />}
        />
        <Route
          path="/profile/changepassword"
          element={isAuthenticated ? <ChangePassword /> : <Login />}
        />

        {/* <Route path="*" element={<Home />} /> */}
      </Routes>

      <FooterTop />
      <Footer />
      <ScrollToTop />
      <ErrorCard />
    </BrowserRouter>
  );
};

export default App;
