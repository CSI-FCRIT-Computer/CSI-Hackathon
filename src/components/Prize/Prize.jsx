import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import Contact from './Contact'
import FAQ from './FAQ.jsx';
import faq from './FAQ.json';


import fprize from './firstimg.png'
import sprize from './secondimg.png'
import tprize from './bronzeimg.png'

import "./Prize.css"
import SponsorsCard from './SponsorsCard'
import sponsorsList from "./sponsors.json"



function Prize() {

  const platinumS = sponsorsList.filter((item) => item.type === "platinum")
  const goldS = sponsorsList.filter(item => item.type === "gold")
  const silverS = sponsorsList.filter(item => item.type === "silver")
  const bronzeS = sponsorsList.filter(item => item.type === "bronze")


  const [closed, setClosed] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setClosed(true);
    setTimeout(() => {
      navigate("/");
    }, 900);
  };


  return (
    <>
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: closed ? "100%" : "0%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        style={{ background: "#eee", height: "120vh" }}
        className="background"
      >
        <div className="prize-container">
      <div className='prize'>
      <div className="prize-card">
        <div className="prize-text">
        <div className="award-title">
            <div className="sponsors-title-txt">Awards </div>
        </div>
          <div className="img-container">
            <img className='centre-img' src={tprize}/>
           

            <img className='left-img' src={fprize}/>
         

            <img className='right-img' src={sprize}/>
            

          </div> 
        </div>
      </div>


      <div className="sponsors-container">
      <div className="sponsors">
        <div className="sponsors-title">
            <div className="sponsors-title-txt">Our Sponsors</div>
            <hr />
        </div>

        <div className="platinum">
          PLATINUM <span>SPONSORS</span>
          <div className='pcard'>
              {platinumS.map((item) => (
                <SponsorsCard key={item.id} items={item} />
              ))}
          </div>
        </div>


        <div className="gold">
          GOLD <span>SPONSORS</span>
          <div className='gcard'>
              {goldS.map((item) => (
                <SponsorsCard key={item.id} items={item} />
              ))}
          </div>
        </div>


        <div className="silver">
          SILVER <span>SPONSORS</span>
          <div className='scard'>
              {silverS.map((item) => (
                <SponsorsCard key={item.id} items={item} />
              ))}
          </div>
        </div>


        <div className="bronze">
          BRONZE <span>SPONSORS</span>
          <div className='bcard'>
              {bronzeS.map((item) => (
                <SponsorsCard key={item.id} items={item} />
              ))}
          </div>
        </div>
      </div>
      </div>


      <div className='m-5'>
      <h2>FAQ's</h2>
      <div class="accordion accordion-flush" id="accordionFlushExample">
      {faq.map((item) =>(
        <FAQ Q={item.ques} A={item.ans} id={item.id}/>
      ))}
      </div>
      </div>


      <div className="contact">
        <Contact/>
      </div>

      <div className="close-prize">
            <button className="close-btn" onClick={handleButtonClick}>
              close
            </button>
      </div>
    </div>
    </div>

    
      </m.div>
    </>
  )
}

export default Prize
