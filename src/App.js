import React from "react";
// ./->look inthe same source folder; import the Header component to be rendered in the app component which is mounted on root
// project will use material-ui for react components and icons
import './App.css';
import Header from './Header'

function App() {
  return (
    <div className="app">
      {/* mount the components here, in App; starts with home */}
      <Header />
      {/* Home */}
    </div>
  );
}

export default App;
