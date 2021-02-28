import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAe1G8O5mq9IS9daX5W6sYWxnwFPwWzMa0",
  authDomain: "micro-8547d.firebaseapp.com",
  projectId: "micro-8547d",
  storageBucket: "micro-8547d.appspot.com",
  messagingSenderId: "716456477143",
  appId: "1:716456477143:web:9913650ce2d68eca778b92",
  measurementId: "G-557TZH319C",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
