// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo1Ot261Ka3WYqYNvUUfvxxXxM6EteVV8",
  authDomain: "reactcourse-68783.firebaseapp.com",
  projectId: "reactcourse-68783",
  storageBucket: "reactcourse-68783.appspot.com",
  messagingSenderId: "890295646634",
  appId: "1:890295646634:web:4e509991bdfb02890113d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);