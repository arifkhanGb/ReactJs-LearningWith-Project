import React from 'react'
import "../styles/productContainer.css"
import SingleProduct from './SingleProduct'
import p1 from "../assets/1.webp"
import p2 from "../assets/2.webp"
import p3 from "../assets/3.webp"
import p4 from "../assets/4.webp"
import p5 from "../assets/5.webp"
import p6 from "../assets/6.jpg"
import p7 from "../assets/7.webp"
import p8 from "../assets/8.webp"

function ProductContainer() {
  return (
    <div className='product_container'>
        <SingleProduct img = {p1} name = "T-Shirt" price = "200$" />
        <SingleProduct img = {p2} name = "T-Shirt" price = "200$" />
        <SingleProduct img = {p3} name = "T-Shirt" price = "200$" />
        <SingleProduct img = {p4} name = "T-Shirt" price = "200$" />
        <SingleProduct img = {p5} name = "T-Shirt" price = "200$" />
        <SingleProduct img = {p6} name = "T-Shirt" price = "200$" />
        <SingleProduct img = {p7} name = "T-Shirt" price = "200$" />
        <SingleProduct img = {p8} name = "T-Shirt" price = "200$" />
    </div>
  )
}

export default ProductContainer