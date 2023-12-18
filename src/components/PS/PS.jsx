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


  const handleButtonClick = () => {
    setClosed(true);
    setTimeout(() => {
      navigate("/");
    }, 900);
  };
  
  return (
    <div className="container-ps">
      <m.div
        initial={{ x: "-100%" }}
        animate={{ x: closed ? "-100%" : "0%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="background"
      >
        
        <h1 className="ps-title">Problem Statements</h1>

              <div className="cards">

                <div className="card">
                  <h2 className="title">Web & App</h2>
                {web.map((statement)=>(
                  <div className="content">
                    <p>
                      {statement.ps}
                    </p>
                  </div>
                ))}
                </div>


                <div className="card">
                  <h2 className="title">Block-chain</h2>
                {blockchain.map((statement)=>(
                  <div className="content">
                    <p>
                      {statement.ps}
                    </p>
                  </div>
                ))}
                </div>


                <div className="card" style={{'marginLeft':"5vw"}}>
                  <h2 className="title">Cybersecurity</h2>
                {cyber.map((statement)=>(
                  <div className="content">
                    <p>
                      {statement.ps}
                    </p>
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

export default PS;
