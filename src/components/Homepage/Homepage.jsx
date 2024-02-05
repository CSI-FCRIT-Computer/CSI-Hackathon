import React, { useState, useRef, useEffect } from "react";
import "./Homepage.css"; 
import Typewriter from './typewriter/typewriter.js';
import { motion as m } from "framer-motion";
import logo from "../assets/logo.png";
import up from "./up.gif"
import ecellLogo from "../assets/ecellfcritb.png";
import iicLogo from "../assets/iiclogo.png";
import clgLogo from "../assets/clgLogo.png";
import csilogo from "../assets/csilogo.png";

import toggle from "../assets/toggle.png";
import soundoff from "../assets/icon-sound-off.png";
import soundon from "../assets/icon-sound-on.png";
import bgsound from "../assets/bg-sound.mp3";
import { Link } from "react-router-dom";
import waves from "./waves.png";
const Homepage = () => {
  // const audioRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  // const toggleAudio = () => {
  //   if (isPlaying) {
  //     audioRef.current.pause();
  //   } else {
  //     audioRef.current.play();
  //   }
  //   setIsPlaying(!isPlaying);
  // };
  // useEffect(() => {
  //   audioRef.current.volume = 0.075;
  //   audioRef.current.addEventListener("ended", handleAudioEnded);

  //   // return () => {
  //   //   audioRef.current.removeEventListener("ended", handleAudioEnded);
  //   // };
  // }, []);

  // const handleAudioEnded = () => {
  //   audioRef.current.currentTime = 0;
  //   audioRef.current.play();
  // };

React.useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://apply.devfolio.co/v2/sdk.js';
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
  return () => {
    document.body.removeChild(script);
  }
}, []);

function handleBrochureDownload(){
  window.location.href="https://drive.google.com/file/d/1GQvr-MkcJnZopJX3sPN2aXIPO4dWd3JM/view?usp=drive_link";
}
function handleDiscordButton(){
  window.location.href="https://discord.gg/MAjwaapcGr";
}



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
        <img src={logo} width="75" alt="logo" />
      </div>

      <div className="about-navigator">
      <Link to="/about">
          <button>About Hackathon</button>
          </Link>
      </div>

        
      {/* <div className="switch">
        <img src={toggle} width="40" alt="toggle" />
      </div> */}
       <div className="csilogo">
        <img src={clgLogo} width="50" alt="csilogo" />
      </div>
      <div className="ps">
        <button>
          <Link to="/ps">Track & PS</Link>
        </button>
      </div>
      <div className="title">
      <div className="background-container">
        {/* <img src={waves} alt="waves"/> */}
      </div>
      <div className="colabrator-contanier">
      <img src={iicLogo}  width="75" alt="iicLogo"/> 
         <span>X</span>
         <img src={csilogo}  width="75" alt="csilogo"/> 
         <span>X</span>
         <img src={ecellLogo}  width="75" id='circle-img' alt="ecellLogo"/> 
      </div>

        <div className="main-title">AGNETHON</div>
        <Typewriter className="tw">Code.Collaborate.Conquer</Typewriter>
        <div className="buttons-container">
       
        <button className="glow-on-hover dc" onClick={handleDiscordButton} type="button">Join Discord</button>
          <button className="glow-on-hover graybtn" type="button" onClick={handleBrochureDownload}>Download Brochure</button>
        </div>
        {/* <div 
          className="apply-button" 
          data-hackathon-slug="AGNETHON" 
          data-button-theme="dark-inverted"
          style={{ height: "100px", width: "200px" }}  
        ></div> */}
        <div className="buttons-container">
          
           <button className="glow-on-hover graybtn" type="button" >Apply with Devfolio</button>
        
        </div>
        </div>
      <div className="timeline">
        <button>
          <Link to="/timeline">Timeline</Link>
        </button>
      </div>
      <div className="mainimg">
        {/* <img src={logo} width="50" alt="mainimg" /> */}
        {/* <frame /> */}
      </div>
      {/* <div className="social">
        <button className="social-icons">
          <span className="label-up">CSI-COMP</span>
          <span className="label-up">CSI-COMP</span>
        </button>
        <span>/</span>
        <button className="social-icons">
          <span className="label-up">CSI-IT</span>
          <span className="label-up">CSI-IT</span>
        </button>
      </div> */}
      <div>
        <img src="">
        </img>
      </div>
      <div className="other">
     
        <Link to="/prize"> <img src={up} alt="other"  style={{ transform: 'rotate(180deg)' }}/></Link>
      </div>
      {/* <div className="sound">
        <button className="sound-btn" onClick={toggleAudio}>
          <img src={isPlaying ? soundon : soundoff} alt="Sound Toggle" />
        </button>
        <audio ref={audioRef} src={bgsound} />
      </div> */}
    </div>
  );
};

export default Homepage;