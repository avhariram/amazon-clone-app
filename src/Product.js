import React from 'react'
import './Product.css'

// think about the product layout=>header/description, price, rating, picture, and add to basket button
// each product component, by being built this way, can be displayed as needed and modified for multiple re-use

function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>
                   {title}
                </p>
                <p 
                className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className ="product__rating">
                    {/* IMPORTANT to research this */}
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img 
            src={image}
            alt="" />
            <button>Add to basket</button>
        </div>
    )
}

export default Product
