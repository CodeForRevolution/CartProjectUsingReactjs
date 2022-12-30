import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import * as firebase from 'firebase';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';


const firebaseConfig = {
    apiKey: "AIzaSyCEa2nqpHjvFpO9wqYbL-_0MikFbw4zYko",
    authDomain: "cart-web-app-a6409.firebaseapp.com",
    projectId: "cart-web-app-a6409",
    storageBucket: "cart-web-app-a6409.appspot.com",
    messagingSenderId: "954121090110",
    appId: "1:954121090110:web:ac5ceb1308b70d86100d6f"
  };
  
 
//   firebase.initializeApp(firebaseConfig);

//      const app = initializeApp(firebaseConfig);



// ReactDOM.render(<App />, document.getElementById('root'));
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);