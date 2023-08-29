import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import "../styles/header.css"
import Card from './Card'


function Header() {
  return (
    <>
    <div className='header'>
    <Logo />
    <Nav />
    <Card />

   
    </div>
        
    </>
  )
}

export default Header