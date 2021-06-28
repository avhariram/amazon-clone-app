/* eslint-disable no-unused-vars */
import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import FlipMove from 'react-flip-move';
//as always, best to mockout what is required first then start building the structure
function Checkout() {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left"> 
                <img 
                className ="checkout__ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                alt ="advert"
                />
                {/* maybe the div not required for the below checkout title bit */}
                <div>
                    <h3>{user ? `Hello ${user.email}` : "Hello guest"}</h3>
                    <h2 className="checkout__title">
                        Your shopping basket
                        {/* Basket items */}
                    </h2>
                    {/* <FlipMove> */}
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                    {/* </FlipMove> */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
                {/* Sub-total component */}
            </div>

        </div>
    )
}

export default Checkout
