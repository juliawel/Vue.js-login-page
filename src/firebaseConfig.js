// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAG-yiGLAEF9MkNNo9p0xLALXYLiRnIcu4",
    authDomain: "vue-login-auth-b3de3.firebaseapp.com",
    projectId: "vue-login-auth-b3de3",
    storageBucket: "vue-login-auth-b3de3.appspot.com",
    messagingSenderId: "496390332347",
    appId: "1:496390332347:web:bc423a226b3af458dd6e9e"
  };

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
