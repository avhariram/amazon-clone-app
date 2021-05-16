//create the initial state of the items we want shared in the data layer context

export const initialState = {
    basket: [],
    user: null
};

//create a reducer to 'dispatch' the data into the data layer; dispatch being associated with react context api -> pattern is to dispatch data to the store and the reducer will listen for updates to the store


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
        
        default:
            return state;
    }
};

export default reducer; 