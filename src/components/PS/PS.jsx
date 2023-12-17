import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const stackArea = document.querySelector(".stack-area");

    if (!stackArea) {
      // Check if stackArea is null
      return;
    }

    function displaceCards() {
      let x=-50;
      cards.forEach((card) => {
        if (card.classList.contains("active")) {
          card.style.transform = `translate(100vw, -50%)`;
        } else {
          card.style.transform = `translate(${x}%, -50%)`;
          x=x-10;
        }
      });
    }

    displaceCards();

    const scrollHandler = () => {
      if (!stackArea) {
        return;
      }

      let proportion = stackArea.getBoundingClientRect().top / window.innerHeight;
      if (proportion <= 0) {
        let n = cards.length;
        let index = Math.ceil((proportion * n) / 2);
        index = Math.abs(index) - 1;
        for (let i = 0; i < n; i++) {
          if (i <= index) {
            cards[i].classList.add("active");
          } else {
            cards[i].classList.remove("active");
          }
        }
        displaceCards();
      }
    };

    window.addEventListener("scroll", scrollHandler);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const handleButtonClick = () => {
    setClosed(true);
    setTimeout(() => {
      navigate("/");
    }, 900);
  };


  return (
    <div className="container">
      <m.div
        initial={{ x: "-100%" }}
        animate={{ x: closed ? "-100%" : "0%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="background"
      >
        
        <h1 className="ps-title">Problem Statements</h1>

        <div className="center">
          <div className="stack-area">
            <div className="right">
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


                <div className="card">
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
