import React from "react";
// ./->look inthe same source folder; import the Header component to be rendered in the app component which is mounted on root
// project will use material-ui for react components and icons
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; //import routing capability for SPA; wrap the app in a router

function App() {
  return (
    <Router>
      <div className="app">
        {/* mount the components here, in App; starts with home */}
        {/* For each page, we want to only render it based on the route that we're in, a switch here is just like regular switch for various cases */}
        <Header />
        {/* header always rendered; so keep it outside the switch statement */}
        <Switch>
          <Route path="/checkout">
                        <Checkout />
          </Route>
          {/* At this route "/" => render the header and home components; "/" is the default route if nothing else can get hit, the homepage route 
          always have the default route last in the render cycle, at the bottom*/}
          <Route path="/">
            <Home />  
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
