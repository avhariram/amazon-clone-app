import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

// think about the product layout=>header/description, price, rating, picture, and add to basket button
// each product component, by being built this way, can be displayed as needed and modified for multiple re-use

function Product({id, title, image, price, rating}) {

    const [{ basket }, dispatchAction] = useStateValue(); //state and action as referred to in the Reducer.JS; state of teh global store->all the objects

    //console.log(basket) array of basket objects as expeed
    //destructured the state to just show the basmket
    //this pulls data from the store for whatever product it is; its accessing the variables that we want from the context provider; the way the context provider was built here; i.e. stateprovider, means that it can be used for any objects that we want to pass around the components since useContext is implemented in StateProvider. 
    //The state and the method for updating the state are destructured when grabbing the context from useStateValue
    //state from useStateValue = {basket: Array(0), user: null} at start; array gets updated with each item added in accordance with the dispatch method; and uses the object as defined below to dispatch
    // since useStateaValue relies on the reducer
    //dispatch function destructured from useStateValue, and needs to be given some implementation

    const addToBasket = () =>{
        //dispatch the object into the data layer; is the dispatch function for useStateValue which returns the useContext on the StateContext which is the createContext; 
        //Add to basket is on the reducer method that is on the state provider that wraps the application; hence we can use it from the reducer file method. 
        dispatchAction({
            type: 'ADD_TO_BASKET',
            item:{
                id: id, 
                title: title, 
                image: image, 
                price: price, 
                rating: rating
            }
        })

    }
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
                    {/* array of length rating, fill with nothing, then for each item in that array, map returns a new array of length equal to rating filled with p-tagged star values that is then rendered
                    The _ and i can be omitted in the map args since we aren't doing anything with any data in the array, no function needs to be passed to .map; no callback fnc required*/}
                    {Array(rating)
                    .fill()
                    .map(() => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img 
            src={image}
            alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
