<template>
    <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="loginUser">
            <div>
                <label for="email">Email</label>
                <input type="email" v-model="email" required>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" v-model="password" required>
            </div>
        </form>
    </div>
</template>

<script setup>
    import '../assets/main.css';
</script>