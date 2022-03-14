import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import {  } from "firebase/auth";
import {getAuth} from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyAhy4nEZVrfdKX3KmqwN4ol5xRrHqqNZ8w",
  authDomain: "react-firebase-signup-otp.firebaseapp.com",
  projectId: "react-firebase-signup-otp",
  storageBucket: "react-firebase-signup-otp.appspot.com",
  messagingSenderId: "111692140653",
  appId: "1:111692140653:web:f33a8e309782ee31c66f64",
  measurementId: "G-6GWXF2817G"
};
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
export const auth = getAuth(app);
// export default db;

