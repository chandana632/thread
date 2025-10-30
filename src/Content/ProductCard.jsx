import React from 'react'
import Style from './ProductCard.module.css'
function ProductCard({product}) {
  if (!product) {
    return null; 
  }
  return (
    <div className={Style.ProductCardContainer}>
        <div className={Style.productImage}>
        <img  src='src/assets/blouse.svg'></img>
        </div>
     
      <div className={Style.ProductDetails}>
        <label className={Style.productDetailsText}>{product.productCategory}</label>
       <label className={Style.productDetailsText}>{product.productName}</label>
       <label className={Style.productDetailsText}>₹ 3200</label>
      </div>
    </div>
  )
}

export default ProductCard