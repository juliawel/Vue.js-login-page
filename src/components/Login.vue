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
            <button type="submit">Login</button>
            <input type="checkbox" checked="checked">Remember me
            <a href="">Forgot password?</a>
        </form>
    </div>
</template>

<script setup>
    import '../assets/main.css';
</script>