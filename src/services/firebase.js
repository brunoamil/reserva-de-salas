import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCQTrCnwDW6juFJg2CsJWwFYkIN7_vSoCY",
    authDomain: "reserva-de-salas-6bda1.firebaseapp.com",
    databaseURL: "https://reserva-de-salas-6bda1.firebaseio.com",
    projectId: "reserva-de-salas-6bda1",
    storageBucket: "reserva-de-salas-6bda1.appspot.com",
    messagingSenderId: "106544317372",
    appId: "1:106544317372:web:64864f8f4bcc1f345d21b9",
    measurementId: "G-H0XY5BCG96"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);