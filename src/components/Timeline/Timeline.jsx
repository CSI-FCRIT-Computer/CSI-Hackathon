import React, { useState, useRef } from "react";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Timeline.css";
import timeline from "./timeline.json";

const day1 = timeline.filter(timestamp => timestamp.dd === "1");
const day2 = timeline.filter(timestamp => timestamp.dd === "2");

const Timeline = () => {
  const [closed, setClosed] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const handleWheel = (e) => {
    const container = containerRef.current;

    if (container) {
      if (e.deltaY > 0) {
        container.scrollLeft += 50;
        e.preventDefault();
      } else {
        container.scrollLeft -= 50;
        e.preventDefault();
      }
    }
  };

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

        <div
          className="timeline-container"
          ref={containerRef}
          onWheel={handleWheel}
          style={{ overflowX: 'auto', whiteSpace: 'nowrap', width: '100%' }}
        >
          <div className="day">
            <h2 className="title-day">Day 1 - 24 Feb 2024</h2>
            {day1.map((timestamp) => (
              <div className="timeline-content" key={timestamp.id}>
                <div className="timeline-icon">
                  <i className={timestamp.icon}></i>
                </div>
                <div className="timeline-info">
                  <div className="timeline-period">{timestamp.dt}</div>
                  <div className="timeline-event">{timestamp.event}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="day">
            <h2 className="title-day">Day 2 - 25 Feb 2024</h2>
            {day2.map((timestamp) => (
              <div className="timeline-content" key={timestamp.id}>
                <div className="timeline-icon">
                  <i className={timestamp.icon}></i>
                </div>
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
            <i className="fas fa-times"></i>
            <span> close</span>
          </button>
        </div>
      </m.div>
    </div>
  );
};

export default Timeline;
