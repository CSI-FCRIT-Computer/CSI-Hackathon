import React, { useState } from 'react'



const SponsorsCard = ({ items }) => {
  return (
    <div className='ss-img'>
      <a href={items.link} target="_blank" rel="noopener noreferrer">
        <img className='s-img' src={items.logo} alt={items.alt} />
      </a>
    </div>
  );
};


export default SponsorsCard
