import React from 'react'
import "../styles/product.css";
import ProductContainer from './ProductContainer'

function Product() {
  return (
    <div className='Product' >
      <h1 id= "product">PRODUCTS</h1>

      <ProductContainer />

    </div>
  )
}

export default Product