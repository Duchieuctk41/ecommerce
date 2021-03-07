import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyATaMPbGjgXrCqmcOuUL8GoW-aUFRP7sno",
  authDomain: "solar-magpie-277211.firebaseapp.com",
  projectId: "solar-magpie-277211",
  storageBucket: "solar-magpie-277211.appspot.com",
  messagingSenderId: "1007415910453",
  appId: "1:1007415910453:web:c578584ae92228d777917c",
  measurementId: "G-1WD1PNYYJX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
