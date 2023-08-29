import React from 'react'
import "../styles/card.css"
import icon from "../assets/icon.png"
import cart from "../assets/cart.svg"

function Card() {
  return (
    <>
        <div className='cart'>
            <img src={icon} alt="icon"  id='car'/>
            <img src={cart} alt="icon" />
        </div>
    </>
  )
}

export default Card