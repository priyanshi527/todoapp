import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyA8qEphrawr_oM8SBLal4rN12MCEETK3j4",
    authDomain: "todo-app-aa416.firebaseapp.com",
    databaseURL: "https://todo-app-aa416.firebaseio.com",
    projectId: "todo-app-aa416",
    storageBucket: "todo-app-aa416.appspot.com",
    messagingSenderId: "338055735774",
    appId: "1:338055735774:web:c8a0e42b58f5ae1fea954f",
    measurementId: "G-BD7M075EX5"
}); 
const db= firebaseApp.firestore();
export default db;