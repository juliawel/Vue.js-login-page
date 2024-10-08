<template>
    <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="loginUser">
            <div>
                <label for="email">Email</label>
                <input type="email" v-model="email" placeholder="Enter username" required>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" v-model="password" placeholder="Enter password" required>
            </div>
            <a href="#">Forgot password?</a>
            <input type="checkbox" checked="checked">Remember me
            <button type="submit">Login</button>
            <p>Don't have an account?</p>
            <a href="Signup.vue">Signup</a>
        </form>
    </div>
</template>

<script setup>
    import '../assets/main.css';
</script>