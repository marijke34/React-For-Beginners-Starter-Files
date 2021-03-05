import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCFs-ucDfwacI55iov7rZH056NEkU0LM-k",
  authDomain: "cath-of-the-day-wes-bos-97475.firebaseapp.com",
  databaseURL:
    "https://cath-of-the-day-wes-bos-97475-default-rtdb.firebaseio.com",
  projectId: "cath-of-the-day-wes-bos-97475",
  storageBucket: "cath-of-the-day-wes-bos-97475.appspot.com",
  messagingSenderId: "838163359806",
  appId: "1:838163359806:web:23700bf0092cd78003496f",
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
