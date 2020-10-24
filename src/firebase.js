// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyA5e2V_w3-74NSsxcSMLzqmtISJPhzSqNM",
  authDomain: "e-clone-c6fab.firebaseapp.com",
  databaseURL: "https://e-clone-c6fab.firebaseio.com",
  projectId: "e-clone-c6fab",
  storageBucket: "e-clone-c6fab.appspot.com",
  messagingSenderId: "102558402855",
  appId: "1:102558402855:web:48999dd3fc758f24f7c102",
  measurementId: "G-0HDFRKZ8N8"
};
const firebaseApp= firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};