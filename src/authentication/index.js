import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import { apiKey } from "./keys";

let config = {
  apiKey: apiKey,
  authDomain: "dusty-couch.firebaseapp.com",
  databaseURL: "https://dusty-couch.firebaseio.com",
  projectId: "dusty-couch",
  storageBucket: "dusty-couch.appspot.com",
  messagingSenderId: "725034882370",
  appId: "1:725034882370:web:c16f190b90ee65d40864db",
  measurementId: "G-0QN2QMKBYL"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export default firebase;
