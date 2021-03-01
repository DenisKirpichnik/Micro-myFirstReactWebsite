import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBM5L-wL0WmR9H4ePCRSnliujz4yO-IwmQ",
  authDomain: "micro-dcd8c.firebaseapp.com",
  projectId: "micro-dcd8c",
  storageBucket: "micro-dcd8c.appspot.com",
  messagingSenderId: "859418518107",
  appId: "1:859418518107:web:b89665ac1440608a0f957e",
  measurementId: "G-DM18GPGWVK",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
