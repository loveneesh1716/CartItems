import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAdgCBrOL8cotMW8JPJwPACn1SeD9OfIlI",
    authDomain: "cart-f1b33.firebaseapp.com",
    projectId: "cart-f1b33",
    storageBucket: "cart-f1b33.appspot.com",
    messagingSenderId: "770235065950",
    appId: "1:770235065950:web:dd0ee3965d2af52f8f76cf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;