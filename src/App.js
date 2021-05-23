/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect }  from "react";
// ./->look inthe same source folder; import the Header component to be rendered in the app component which is mounted on root
// project will use material-ui for react components and icons
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; //import routing capability for SPA; wrap the app in a router
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

//create a listener to listen for who is signed in


function App() {

  const[{ user },dispatch]=useStateValue(); //need this to dispatch the user to the global state to be used in the header and elsewhere


  useEffect(() => { //like an if statement in react, is a listener for the state changes on user
    auth.onAuthStateChanged(authedUser => { //listens for a sign-in on the user or their login state; 
      console.log('USER name>>', authedUser);
      if(authedUser){
        //user is or was logged in
        dispatch({
          type: 'SET_USER',
          user: authedUser //set the user to the authenticated user from firebase
        })
      }else{
        dispatch({
          type:"SET_USER",
          user: null
        })
        //user is logged out
      }
    })
  }, []) //will only run when the user or basket component is updated (if included in the matrix),if blank will only run once when the app component loads

  
  return (
    <Router>
      <div className="app">
        {/* mount the components here, in App; starts with home */}
        {/* For each page, we want to only render it based on the route that we're in, a switch here is just like regular switch for various cases */}
        {/* header always rendered; so keep it outside the switch statement */}
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* At this route "/" => render the header and home components; "/" is the default route if nothing else can get hit, the homepage route 
          always have the default route last in the render cycle, at the bottom*/}
          <Route path="/">
            <Header />
            <Home />  
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
