import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyACv4AD8y7MGmxn55M0Bob7_T8Z3vh8BbI",
    authDomain: "hogar2021.firebaseapp.com",
    databaseURL: "https://hogar2021-default-rtdb.firebaseio.com",
    projectId: "hogar2021",
    storageBucket: "hogar2021.appspot.com",
    messagingSenderId: "230477030441",
    appId: "1:230477030441:web:af7a37c7c604fd46c0a838",
    measurementId: "G-B1NNV18DHP"
  };
  const db = firebase
  .initializeApp(firebaseConfig)
  .database()
export {db, firebase}