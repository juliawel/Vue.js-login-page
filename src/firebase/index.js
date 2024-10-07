
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCQRkn__tJ5NQOzHcK3eUdQQ7DiyvuWZe4",
  authDomain: "vue-firebase-auth-c388f.firebaseapp.com",
  projectId: "vue-firebase-auth-c388f",
  storageBucket: "vue-firebase-auth-c388f.appspot.com",
  messagingSenderId: "128168297952",
  appId: "1:128168297952:web:24a5653a898dc116781785"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};