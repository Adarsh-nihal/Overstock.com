import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAimv8X6_FjVwd4abT2Y3uUXnS6RO578RI",
    authDomain: "overstack-40274.firebaseapp.com",
    projectId: "overstack-40274",
    storageBucket: "overstack-40274.appspot.com",
    messagingSenderId: "806941815600",
    appId: "1:806941815600:web:a8e4e7e5a85e34ac7f4ef5",
    measurementId: "G-Q2YRXTGDGF"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export {auth,googleAuthProvider};