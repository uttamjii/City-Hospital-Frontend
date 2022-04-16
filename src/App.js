import Header from "./Components/Layout/Header/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./Pages/Home/Home.js";
import FooterTop from "./Components/Layout/FooterTop/FooterTop.js";
import Footer from "./Components/Layout/Footer/Footer.js";
import About from "./Pages/About/About.js";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <FooterTop />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
