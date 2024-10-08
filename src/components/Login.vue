<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="loginUser">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Senha:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { auth } from "../firebaseConfig";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
        errorMessage: null,
      };
    },
    methods: {
      async loginUser() {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
          console.log("Usuário logado:", userCredential.user);
        } catch (error) {
          this.errorMessage = "Falha no login. Verifique suas credenciais.";
          console.error("Erro no login:", error);
        }
      },
    },
  };
  </script>

<script setup>
    import '../assets/main.css';
</script>