import React from 'react'
import "../styles/home.css";
import  home  from "../assets/home.png"

function Home() {
  return (
    <div className='home' id="home">
      <div className='leftContainer'>
        <h1>Life is Styled with this think</h1>
        <h3>A New Fesion Point..</h3>
        <p>Here You can choose according to your choices.</p>

        <button>Explore</button>
      </div>

      <div className='rightContainer'>
        
      <img src={home}alt="profileIMG" />
        
      </div>

      
    </div>
  )
}

export default Home