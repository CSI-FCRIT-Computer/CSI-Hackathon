import React from 'react'
import "./Prize.css"
import SponsorsCard from './SponsorsCard'
import prizeImg from "./Rectangle 24.svg"
import sponsorsList from "./sponsors.json"


function Prize() {
  const platinumS = sponsorsList.filter((item) => item.type === "platinum")
  const goldS = sponsorsList.filter(item => item.type === "gold")
  const silverS = sponsorsList.filter(item => item.type === "silver")
  const bronzeS = sponsorsList.filter(item => item.type === "bronze")

  return (
    <div className="prize-container">
      <div className='prize'>
      <div className="prize-card">
        <div className="prize-text">
          <div className='prize-txt'>PRIZES</div>
          <img src={prizeImg}  width={1024}/>  
        </div>
      </div>
      <div className="sponsors-container">
      <div className="sponsors">
        <div className="sponsors-title">
            <div className="sponsors-title-txt">Our Sponsors</div>
            <hr />
        </div>
        <div className="platinum">
          PLATINUM SPONSORS
          <div className='pcard'>
              {platinumS.map((item) => (
                <SponsorsCard key={item.id} items={item} />
              ))}
          </div>
        </div>
        <div className="gold">
          GOLD SPONSORS
          <div className='gcard'>
              {goldS.map((item) => (
                <SponsorsCard key={item.id} items={item} />
              ))}
          </div>
        </div>
        <div className="silver">
          SILVER SPONSORS
          <div className='scard'>
              {silverS.map((item) => (
                <SponsorsCard key={item.id} items={item} />
              ))}
          </div>
        </div>
        <div className="bronze">
          BRONZE SPONSORS
          <div className='bcard'>
              {bronzeS.map((item) => (
                <SponsorsCard key={item.id} items={item} />
              ))}
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Prize
