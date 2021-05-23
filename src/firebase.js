// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line no-unused-vars
//this config is copied from firebase: https://console.firebase.google.com/u/0/project/clone-app-cdfbb/settings/general/web:Nzk2MGY1ZWMtMmI3Ni00ZjljLTlmNjgtOTcxMTY5OWU5NmQz

//setup sign-in methods here: https://console.firebase.google.com/u/0/project/clone-app-cdfbb/authentication/providers
//then in terminal run npm install firebase; this also with the global tools: sudo npm install -g firebase-tools


//once app is built and ready to deploy -> first run firebase init to initialise the project; first go to hosting,use existing project, select the project name, for public directory use 'build', and then click y for an spa, then once initialised, hit npm run build to create prod version, then run 'firebase deploy' 

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyArh1_KI5gd6gUT_oM_9mJT5sntion_7cU",
    authDomain: "clone-app-cdfbb.firebaseapp.com",
    projectId: "clone-app-cdfbb",
    storageBucket: "clone-app-cdfbb.appspot.com",
    messagingSenderId: "905946277852",
    appId: "1:905946277852:web:72eeaa7fc3574855911119",
    measurementId: "G-9WHHGVXYJ5"
  };

//initialise the app with the config we've copied
  const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialise the DB, on the app we initialise the store, firestore is the realtime firebase db
const db = firebaseApp.firestore();

//below provides a variable to handle sign-in functionality and authentication
const auth = firebase.auth();
//export the db and auth variables for use
export { db, auth }; 