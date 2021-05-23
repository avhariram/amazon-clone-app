//create the initial state of the items we want shared in the data layer context

export const initialState = {
    basket: [],
    user: null
};

//create a reducer to 'dispatch' the data into the data layer; dispatch being associated with react context api -> pattern is to dispatch data to the store and the reducer will listen for updates to the store


//create a selector to get the sum of values for the basket; could be done as a local function in the checkout page
export const getBasketTotal = (basket) => basket?.reduce((totalPrice, item) => totalPrice+item.price,0)


//read the example at https://reactjs.org/docs/hooks-reference.html#usecontext
//https://reactjs.org/docs/hooks-reference.html#usereducer

export const reducer = (state, action) =>{
    //action is an object containing a type and and item and is what we want to do with the state
    //for the basket, the item becomes the product details from the dispatch method on the product
    // console.log(action); Contains and object with {type: , item{...}}
    
    // console.log(state);

    switch(action.type){
        case 'ADD_TO_BASKET': //matches the dispatch method name on the product
            return{
                ...state, 
                basket:[...state.basket, action.item] //rturn the original state and an updated basket with the current items and the added items 
            };
        case 'REMOVE_FROM_BASKET':
                //don't use a filter to remove items->it checks for all the items matching the action ID and removes them all
            const index = state.basket.findIndex(
                (item) => item.id===action.id //use action.id since it matches the way we've written id as a prop of the action in checkoutproduct.js
            ); //get index of the item that matches the action; for a product, the action id is passed as a prop from the product downt to the remove from basket action, and the item id is taken from the basket state, so where it matches we get the first index of that item
            let newBasket = [...state.basket];
            //have a new basket that is the current basket
            //need to remove the item on its array index else if we match ID's it will remove all the items with the matching id
            if (index >=0){
                    newBasket.splice(index, 1)

                } else{
                    console.warn(`Cant remove product (id: ${action.id}) since its not in the basket`)
                }
            return { ...state, basket: newBasket}
            //then return the current state, and set the state of the basket as the new basket. Have to return the current state else we lose that info
            //the ...state is not really required, it works fine without
        case 'SET_USER':
            return{
                ...state, 
                user:action.user
            }

        default:
            return state;
    }
};

export default reducer; 