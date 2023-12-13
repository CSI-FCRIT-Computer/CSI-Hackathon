import React, { useState, useRef, useEffect } from "react";
import "./Homepage.css"; // Create Homepage.css file for styling
import { motion as m } from "framer-motion";
import logo from "../assets/logo.png";
import toggle from "../assets/toggle.png";
import soundoff from "../assets/icon-sound-off.png";
import soundon from "../assets/icon-sound-on.png";
import bgsound from "../assets/bg-sound.mp3";
import frame from "../frame.jsx";
import { Link } from "react-router-dom";
const Homepage = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    audioRef.current.volume = 0.075;
    audioRef.current.addEventListener("ended", handleAudioEnded);

    // return () => {
    //   audioRef.current.removeEventListener("ended", handleAudioEnded);
    // };
  }, []);

  const handleAudioEnded = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <div className="homepage-container">
       <m.div
        initial={{ y: "-300%" }}
        animate={{ y: closed ? "-300%" : "0%" }}
        exit={{ y: "-300%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        style={{ background: "transparent", height: "100vh" }}
        className="background"
      ></m.div>
      <div className="logo">
        <img src={logo} width="25" alt="logo" />
      </div>
      <Link to="/about">
      <div className="about-navigator">
          <button>About Hackathon</button>
      </div>
<<<<<<< HEAD
=======
      </Link>
        
      {/* <div className="switch">
        <img src={toggle} width="40" alt="toggle" />
      </div> */}
>>>>>>> 70081b9f6e1495cc69e51facb059a8280a0fbeec
      <div className="timeline">
        <button>
          <Link to="/timeline">Timeline</Link>
        </button>
      </div>
      <div className="contact-us">
        <button>
          <Link to="/contact">Contact Us</Link>
        </button>
      </div>
      <div className="problem-statements">
        <button>
          <Link to="/ps">Problem  Statements</Link>
        </button>
      </div>

      
      <div className="mainimg">
        {/* <img src={logo} width="50" alt="mainimg" /> */}
        {/* <frame /> */}
      </div>
      <div className="social">
        <button className="social-icons">
          <span className="label-up">CSI-COMP</span>
          <span className="label-up">CSI-COMP</span>
        </button>
        <span>/</span>
        <button className="social-icons">
          <span className="label-up">CSI-IT</span>
          <span className="label-up">CSI-IT</span>
        </button>
      </div>
      <div className="sound">
        <button className="sound-btn" onClick={toggleAudio}>
          <img src={isPlaying ? soundon : soundoff} alt="Sound Toggle" />
        </button>
        <audio ref={audioRef} src={bgsound} />
      </div>
    </div>
  );
};

export default Homepage;
