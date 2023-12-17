import React, { useState } from "react";
import { motion as m } from "framer-motion";
import { useScroll } from "framer-motion"
import "./About.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import csilogo from "../assets/csilogo.png";
import college from "./images/College.png";
import AboutUsText from "./AboutUsText";
import CsiGrid from "./CsiGrid";
import AboutAgnethon from "./AboutAgnethon";
import Close from "./images/cancel_FILL0_wght400_GRAD0_opsz24.svg";


const About = () => {
  const [closed, setClosed] = useState(false);
  const { scrollYProgress } = useScroll();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    setClosed(true);
    setTimeout(() => {
      navigate("/");
    }, 700);
  };
  return (
    
    <div className="About about-container">
      <m.div
        initial={{ y: "-100vh" }}
        animate={{ y: closed ? "-100vh" : "0%" }}
        exit={{ y: "-100vh" }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ background: "transparent", height: "100%" }}
        className="background"
      >
        <div className="logo">
          <img src={logo} width="75" alt="logo" />
        </div>
        <div className="csilogo">
        <img src={csilogo} width="50" alt="csilogo" />
      </div>
        <div className="About-content">
        <AboutAgnethon />

        <div className="clg-img">
          <img src={college} className="img-fluid" alt="College"/>
          </div> 

        <AboutUsText />
        <CsiGrid />

        <div className="how-to-reach">
          <h1>VISIT US</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7321044862974!2d72.98912937435549!3d19.075512682128895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6cae0d8c5ab%3A0xbbf4481d662ca2d8!2sFr.%20Conceicao%20Rodrigues%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1702292962627!5m2!1sen!2sin"
         className="map" style={{border:0}} 
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


          <div className="close-div">
            <button className="close" onClick={handleButtonClick}>
            <span class="material-symbols-outlined" >
            cancel
            </span>
            </button>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default About;
