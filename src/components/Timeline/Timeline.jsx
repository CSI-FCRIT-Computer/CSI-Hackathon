import React, { useState } from "react";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Timeline.css";
import timeline from "./timeline.json";

const day1 = timeline.filter(timestamp => timestamp.dd === "1");
const day2 = timeline.filter(timestamp => timestamp.dd === "2");

const Timeline = () => {
  const [closed, setClosed] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setClosed(true);
    setTimeout(() => {
      navigate("/");
    }, 700);
  };
  return (
    <div className="main">
      <m.div
        initial={{ x: "100%" }}
        animate={{ x: closed ? "100%" : "0%" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        style={{ background: "transparent", height: "100vh" }}
        className="background"
      >

        <h1 className="timeline-title">Timeline</h1>

        <div className="timeline-container">
          
          <div className="day">
            <h2 className="title-day">Day 1</h2>
            {day1.map((timestamp)=>(
                <div className="timeline-content">
                  <div className="timeline-icon"><i class={timestamp.icon}></i></div>
                  <div className="timeline-info">
                    <div className="timeline-period">{timestamp.dt}</div>
                    <div className="timeline-event">{timestamp.event}</div>
                  </div>
                </div>
            ))}
          </div>
          
          <div className="day">
            <h2 className="title-day">Day 2</h2>
            {day2.map((timestamp)=>(
                <div className="timeline-content">
                  <div className="timeline-icon"><i class={timestamp.icon}></i></div>
                  <div className="timeline-info">
                    <div className="timeline-period">{timestamp.dt}</div>
                    <div className="timeline-event">{timestamp.event}</div>
                  </div>
                </div>
            ))}
          </div>
        </div>
        
        
        <div className="close-div">
          <button className="close" onClick={handleButtonClick}>
            <i class="fas fa-times"></i><span> close</span>
          </button>
        </div>


      </m.div>
    </div>
  );
};

export default Timeline;
