
//read this: https://reactjs.org/docs/context.html#contextprovider for details of react-context-api; required for createContext and useContext
//useReducer - similar to useState but provides additional dispatch function; so updating the state can be more complex. See: https://reactjs.org/docs/hooks-reference.html#usestate

//learn through use
//context api uses same patterns as redux :(, uses something like global store for the app

import React, { createContext, useContext, useReducer } from "react";

//prepare the dataLayer to hold the info
export const StateContext = createContext();

//Wrap our appplication and provide the data layer to all the components in the app
//Note children is a special prop -> props.children destructured; is all the children rendered by StateProvider
//All the children of the provider will haev access to the state context
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );

// Pull information from the dataLayer
export const useStateValue = () => useContext(StateContext);