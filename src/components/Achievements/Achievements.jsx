import React, { useState } from "react";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Achieve.css";
const Achievements = () => {
  const [closed, setClosed] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setClosed(true);
    setTimeout(() => {
      navigate("/");
    }, 700);
  };
  return (
    <div className="container">
      <m.div
        initial={{ y: "-100%" }}
        animate={{ y: closed ? "-100%" : "0%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        style={{ background: "#eee", height: "100vh" }}
        className="background"
      >
        <div className="content">
          <h3>
            Hello, my name is <span> SAVIO DIAS </span>
            {/* <div class="message">
              <div class="word1">close</div>
              <div class="word2">code</div>
              <div class="word3">creating</div>
            </div> */}
          </h3>
          <p>
            Sophomore at FCRIT, Vashi. GSoC 2023 Mentee @AsyncAPI. Passionate
            about technology, I enjoy crafting elegant code and captivating
            designs. With a love for open-source, I actively contribute to the
            community. Let's connect and embark on a journey of creativity and
            innovation together!
          </p>
          <div className="social-a">
            <button className="social-icons">
              <span className="label-up">twitter</span>
              <span className="label-up">twitter</span>
            </button>
            <span>/</span>
            <button className="social-icons">
              <span className="label-up">linkedin</span>
              <span className="label-up">linkedin</span>
            </button>
            <span>/</span>
            <button className="social-icons">
              <span className="label-up">github</span>
              <span className="label-up">github</span>
            </button>
          </div>
          <div className="interests">
            Interests
            <ul>
              <li>Open Source Developer</li>
              <li>Web Design & Developer</li>
              <li>Competitive Programmer</li>
              <li>UI & UX Designer</li>
              <li>Game Developer</li>
            </ul>
          </div>
          <div className="contact">
            <div className="contact1">Want to contact me?</div>
            <div className="contact2">
              Send me email over at <span>diassavio629@gmail.com</span>
            </div>
          </div>
          <div className="close-div">
            <button className="close" onClick={handleButtonClick}>
              close
            </button>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default Achievements;
