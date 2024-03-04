import React from 'react'
import "./Product.css"

function Product({id,image,title,rating,price}) {
  return (
    <div className='product'>
        <img  src= {image} alt=''/>
        <div className='product_info'>
            <p className='ptag'>{title}</p>
            <div className='product_rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                <p>⭐</p>
                ))}
            </div>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
        </div>
    </div>
  )
}

export default Product
