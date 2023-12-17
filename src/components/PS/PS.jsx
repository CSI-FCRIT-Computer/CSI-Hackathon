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

    // Check if stackArea is null
    if (!stackArea) {
      return;
    }

    function displaceCards() {
      let x=-50;
      cards.forEach((card) => {
        if (card.classList.contains("active")) {
          card.style.transform = `translate(100vw, -50%) scale(0.5)`;
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

      const proportion = stackArea.getBoundingClientRect().top / window.innerHeight;
      const threshold = window.innerWidth < 600 ? 0.5 : 0;

      if (proportion <= threshold) {
        const n = cards.length;
        const index = Math.ceil((proportion * n) / 2);
        const adjustedIndex = Math.abs(index) - 1;

        for (let i = 0; i < n; i++) {
          if (i <= adjustedIndex) {
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
        initial={{ y: "100%" }}
        animate={{ y: closed ? "100%" : "0%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="background"
      >
        <div className="elements">
          <h1 className="ps-title">Track & PS</h1>

          <div className="close-div">
            <button className="close" onClick={handleButtonClick}>
              <i class="fas fa-times"></i><span> close</span>
            </button>
          </div>
        </div>


        <div className="center">
          <div className="stack-area">
            <div className="right">
              <div className="cards">


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
            </div>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default PS;
