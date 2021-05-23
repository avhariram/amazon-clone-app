/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import './Subtotal.css'
//can use a library: react-currency-format for the currency information, use npm install at that step to get the libraries we need
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './Reducer'

function Subtotal() {
    //grab the basket items again like in the header:
    const [{basket}, dispatch]=useStateValue(); //useStateValue-> custom hook

    //use a reduce method to take an array of basket objects, and reduce it to a single value with an initial value of 0
    //total cost for the accumulator; then each object is the item, and we accumulate on the item.price by summing the values
    //could have done it the way below without a selector; selector is the best method
    // const checkoutTotal = basket.reduce( (totalCost, item) => (
    //     totalCost + item.price
    // ),0);

    return (
        <div className="subtotal">
            {/* Checkout currency format properties and render techniques renderText is the main method to render what to see. 
            https://www.npmjs.com/package/react-currency-format
            Is the most useful way to render the value prop in a component other than span; so we take value as the input (value to format from the documentation) and render it in some custom way.*/}
            <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items):
                        {/* Subtotal ({basket.length} items): */}
                        <strong>{` ${value}`}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/>
                        This order contains a gift?
                    </small>
                </>
            )}
            decimalScale={2}
            // value={checkoutTotal}
            value={ getBasketTotal(basket) } //this is value passed into renderText
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button> Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal