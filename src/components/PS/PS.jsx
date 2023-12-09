import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import "./PS.css";
import img1 from "./proj/thumb1.jpg";

const cardsData = [
  {
    id: 1,
    imageUrl: img1,
    text: "Card 1",
    type: "Website",
    link: "https://example.com/card1"
  },
  {
    id: 2,
    imageUrl: "path-to-image-2",
    text: "Card 2",
    type: "Website",
    link: "https://example.com/card2"
  },
  {
    id: 3,
    imageUrl: "path-to-image-2",
    text: "Card 2",
    type: "Website",
    link: "https://example.com/card2"
  },
  {
    id: 4,
    imageUrl: "path-to-image-2",
    text: "Card 2",
    type: "Design",
    link: "https://example.com/card2"
  },
  {
    id: 5,
    imageUrl: "path-to-image-2",
    text: "Card 2",
    type: "Design",
    link: "https://example.com/card2"
  },
  {
    id: 6,
    imageUrl: "path-to-image-2",
    text: "Card 2",
    type: "Design",
    link: "https://example.com/card2"
  }
];

const Projects = () => {
  const [closed, setClosed] = useState(false);
  const navigate = useNavigate();

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
        exit={{ x: "-100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        style={{ background: "#eee", height: "100vh" }}
        className="background"
      >


        <div className="content1">
          <div className="proj-info">
            <h3>Problem Statements</h3>
            <p>
              Some of my recent work is showcased below, allowing you to explore
              the projects and the techstack I used for each one.
            </p>
          </div>
          <div className="card-container">
            {cardsData.map((card) => (
              <a key={card.id} href={card.link} className="card">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                ></div>
                <div className="card-text">
                  {card.text}
                  <p>{card.type}</p>
                </div>
              </a>
            ))}
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

export default Projects;
