import Header from "./Components/Layout/Header/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
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

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/editprofile" element={<EditProfile />} />
        <Route path="/profile/changepassword" element={<ChangePassword />} />

        {/* <Route path="*" element={<Home />} /> */}
      </Routes>

      <FooterTop />
      <Footer />

      <ScrollToTop />
    </BrowserRouter>
  );
};

export default App;
