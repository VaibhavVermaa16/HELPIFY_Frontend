import React, { Profiler } from "react";
import "./bootstrap-icons.css";
import "./bootstrap.min.css";
import "./templatemo-topic-listing.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import { Services } from "./components/Service";
import AboutUs from "./components/AboutUs";
import { Faqs } from "./components/Faqs";
import Login from "./components/Login";
import { Profile } from "./components/Profile";
import { Service } from "./components/Helper";
import { Register } from "./components/Register";
// import Contact from "./Contact";
function App() {
  // console.log(localStorage.getItem(isAuthenticated));
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/faqs" element={<Faqs />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
