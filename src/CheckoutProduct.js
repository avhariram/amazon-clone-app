/* eslint-disable no-unused-vars */
import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';
import { Flip } from '@material-ui/icons';
// create the component to render on the checkout page; is designed the way we want to see products on the checkout page
//same props as home page
// props MUST be passed in as an object->curly braces
function CheckoutProduct({id, image, title, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket= () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id
        })
        //remove the items from basket
    }
    return (
        
        <div className='checkoutProduct'>
            <img 
            className='checkoutProduct__image'
            src={image}
            alt='Checkout items'
            />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className ='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map(() => (
                        <p>⭐</p>
                    ))}
                </div>
                
                <button onClick={removeFromBasket}>
                    Remove from basket
                </button>
            </div>
        </div>
        
    )
}

export default CheckoutProduct;
