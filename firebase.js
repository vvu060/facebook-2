import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyZScFIFDZGrXSlOA7GARhEaqDfyJdWow",
  authDomain: "facebook-2-a5cdf.firebaseapp.com",
  projectId: "facebook-2-a5cdf",
  storageBucket: "facebook-2-a5cdf.appspot.com",
  messagingSenderId: "758587584423",
  appId: "1:758587584423:web:fdde024c61d65676439082",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
