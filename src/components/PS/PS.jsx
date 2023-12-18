import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import "./PS.css";
import ps from "./ps.json";

const web = ps.filter(statement => statement.title === "web");
const blockchain = ps.filter(statement => statement.title === "blockchain");
const cyber = ps.filter(statement => statement.title === "cyber");

const PS = () => {
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
    }, 900);
  };
  
  return (
    <div className="container" >
      <m.div
        initial={{ x: "-100%" }}
        animate={{ x: closed ? "-100%" : "0%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="background"
      >
        
        <h1 className="ps-title">Track & PS</h1>

              <div className="cards"
                ref={containerRef}
                onWheel={handleWheel}
                style={{overflowY:"auto"}}
              >

              <div className="card">
                  <h2 className="card-title">Web & App</h2>
                  <div className="content">
                  {web.map((statement)=>(
                    <p>
                      {statement.ps}
                    </p>
                  ))}
                  </div>
                </div>

                <div className="card">
                  <h2 className="card-title">BlockChain</h2>
                  <div className="content">
                  {blockchain.map((statement)=>(
                    <p>
                      {statement.ps}
                    </p>
                  ))}
                  </div>
                </div>

                <div className="card">
                  <h2 className="card-title">Cybersecurity</h2>
                  <div className="content">
                  {cyber.map((statement)=>(
                    <p>
                      {statement.ps}
                    </p>
                  ))}
                  </div>
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

export default PS;
