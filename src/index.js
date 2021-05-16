import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';
import reducer, { initialState }  from './Reducer';



ReactDOM.render(
  <React.StrictMode>
    {/* initialState of the datalayer, and reducer is how to manipulate that data layer 
    the props to set on this are from StateProvider.js
    Instead of defining the reducer function here; we'll define it in a seaparate file
    and the same for the initial state
    By having the methods here; they can be passed around the app with 
    the specific contexts fromt the stateprovider*/}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
