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
      </Routes>

      <FooterTop />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
