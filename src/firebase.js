// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBtRm8MCGh6jOV0oGcORl2QFf395yjtBWA",
    authDomain: "facebook-clone-57447.firebaseapp.com",
    databaseURL: "https://facebook-clone-57447.firebaseio.com",
    projectId: "facebook-clone-57447",
    storageBucket: "facebook-clone-57447.appspot.com",
    messagingSenderId: "748452926887",
    appId: "1:748452926887:web:0874edc8759e6ee2d75282",
    measurementId: "G-YVX969P6EV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
