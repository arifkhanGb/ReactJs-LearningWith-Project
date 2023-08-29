import React from 'react'
import "../styles/singleproduct.css";
function SingleProduct(props) {
  return (
    <div className='singleProduct'>
        <img src= {props.img} alt="img" />
        <h1>{props.name}</h1>
        <p>{props.price}</p>
    </div>
  )
}

export default SingleProduct