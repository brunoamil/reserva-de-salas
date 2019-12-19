import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDuLdpXB1vBepiwaDr5zJPurQPEXOWcr9k",
    authDomain: "reserva-de-salas-5ae69.firebaseapp.com",
    databaseURL: "https://reserva-de-salas-5ae69.firebaseio.com",
    projectId: "reserva-de-salas-5ae69",
    storageBucket: "reserva-de-salas-5ae69.appspot.com",
    messagingSenderId: "124636464406",
    appId: "1:124636464406:web:5e2fae213c07c9567dbc37",
    measurementId: "G-RSNJFGNZVQ"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig)