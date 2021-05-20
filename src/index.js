import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "./firebase";



  // Your web app's Firebase configuration
  const ref=firebase.firestore().collection("products");


ReactDOM.render(<App/>,document.getElementById('root'));
