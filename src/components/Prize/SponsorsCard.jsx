import React, { useState } from 'react'



const SponsorsCard = ({items}) => {
  return (
    <div>
      <img className='s-img' src={items.logo} alt="logo" />
    </div>
  )
}

export default SponsorsCard
