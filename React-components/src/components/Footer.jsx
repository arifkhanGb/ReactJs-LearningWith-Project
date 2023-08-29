import React from 'react'
import "../styles/footer.css"
import app from "../assets/Appstore.png"
import play from "../assets/playstore.png"
function Footer() {
  return (
    <div className='footer' id="footer">
      
      <section className='sec_1'>
        <h1>Dounload our App</h1>
        <h4>from Andoid & IOS Phone</h4>
        <img src={play} alt="playstore" />
        <img src={app} alt="App store" />
      </section>

      <section className='sec_2'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, amet.</p>
        <h1>Copyrights 2023 © Gallaxy</h1>
      </section>

      <section className='sec_3'>
        <h3>Follow US</h3>
        <p>Instagram</p>
        <p>Linkdin</p>
        <p>YouTube</p>
      </section>

    </div>
  )
}

export default Footer