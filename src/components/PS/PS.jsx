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
        initial={{ y: "100%" }}
        animate={{ y: closed ? "100%" : "0%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        style={{ background: "#eee", height: "120vh" }}
        className="background"
      >
        {/* <m.div
        initial={{ y: "-100%" }}
        animate={{ y: closed ? "-100%" : "0%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        style={{ background: "#eee", height: "100vh" }}
        className="background"
      > */}
        <div className="content1">
          <div className="proj-info">
            <h3>Projects</h3>
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
          <div className="am">
            <h3>Achievements</h3>
            <p>
              Below is a snapshot of my notable achievements. These
              accomplishments highlights my interest and showcase the skills in
              the field of Web Development, Designing and Competitive
              Programming.
            </p>
            <p>
              • Secured 5th rank out of 2300+ contributors in Winter of Code 3.0
              event organized by IIIT Kalyani.
              <br />• Shortlisted as top 15 teams out of 60 teams in
              Hackoverflow Hackathon organized by Pillai HOC College,Rasayni.
              <br />• Shortlisted as top top 35 teams out of 600 teams in
              Hackanova Hackathon organized by Thakur College of
              Engineering,Kandivalli.
              <br />• Achieved 2nd position in Bluesprint Hackathon out of 30
              teams organized by Bluelearn.
              <br />• Secured 3rd rank in Bug4ever Annual National Level
              Flagship contest organized by Arena : Codechef SIES.(Team of 2)
              <br />• Secured 2nd rank in Technoblitz Clash of Codes, State
              level coding contest organized by CSI community.
              <br />• Secured 1828 rank in Google Kickstart Round H.
            </p>
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
