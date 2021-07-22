// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArxdk6_UtTN9pviY8yBDdYr4Eh8ZHB4fM",
  authDomain: "my-discussion-board.firebaseapp.com",
  projectId: "my-discussion-board",
  storageBucket: "my-discussion-board.appspot.com",
  messagingSenderId: "798732824092",
  appId: "1:798732824092:web:e796a65035be7f034ef9d9",
  measurementId: "G-162PZY9Z59"
};

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyArxdk6_UtTN9pviY8yBDdYr4Eh8ZHB4fM",
  authDomain: "my-discussion-board.firebaseapp.com",
  projectId: "my-discussion-board",
  storageBucket: "my-discussion-board.appspot.com",
  messagingSenderId: "798732824092",
  appId: "1:798732824092:web:e796a65035be7f034ef9d9",
  measurementId: "G-162PZY9Z59"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db , auth , storage };
