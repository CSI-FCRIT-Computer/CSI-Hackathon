import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import "./PS.css";
import ps from "./ps.json"

const web = ps.filter(card => card.type === "web");
const design = ps.filter(card => card.type === "design");

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
    <div className="main">
      <m.div
        initial={{ x: "-100%" }}
        animate={{ x: closed ? "-100%" : "0%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        style={{ background: 'black', height: "100vh" }}
        className="background"
      >

        <h1 className="ps-title">Problem Statements</h1>
        
        <div className="card-container">

          <div className="container">
            <div className="card">
              <h1 className="section-title">Web & App</h1>
              
              <div className="section">   
                {web.map((card)=>(         
                  <div className="statement">
                    {card.ps}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="container">
            <div className="card">
              <h1 className="section-title">Design</h1>
              
              <div className="section">   
                {design.map((card)=>(         
                  <div className="statement">
                    {card.ps}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="container">
            <div className="card">
              <h1 className="section-title">Design65432</h1>
              
              <div className="section">   
                {design.map((card)=>(         
                  <div className="statement">
                    {card.ps}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
        


        
        <div className="close-div">
          <button className="close" onClick={handleButtonClick}>
            close
          </button>
        </div>
      </m.div>
    </div>
  );
};

export default PS;
