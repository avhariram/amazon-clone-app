import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
//as always, best to mockout what is required first then start building the structure
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left"> 
                <img 
                className ="checkout__ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                alt ="advert"/>
                {/* maybe the div not required for the below checkout title bit */}
                <div>
                    <h2 className="checkout__title">
                        Your shopping basket
                        {/* Basket items */}
                    </h2>
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
