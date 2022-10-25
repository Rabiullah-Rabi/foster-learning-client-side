// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4gfCcQnH_ariQosbIaajfBhz8mLLf64U",
  authDomain: "foster-learning.firebaseapp.com",
  projectId: "foster-learning",
  storageBucket: "foster-learning.appspot.com",
  messagingSenderId: "731889749212",
  appId: "1:731889749212:web:559b038da0b061e29bf819"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;