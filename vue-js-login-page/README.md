# Vue.js Firebase Authentication Project

This app provides a basic authentication system using Vue.js and Firebase. Users can:
- Register an account by providing an email and password.
- Log in with their registered credentials.
- Log out to end their session.

## Features

- User Authentication: Users can register, log in, and log out using Firebase authentication services.
- Vue Router Navigation Guard: Protects routes from unauthorized access by redirecting unauthenticated users to the login page.
- State Management with Vuex: User session is managed using Vuex to persist and update user authentication state.
- Dynamic Routing: The app uses lazy-loaded routes to optimize the initial page load time.
- Firebase Integration: This project integrates with Firebase for authentication and user management.
- Responsive Forms: Simple, responsive forms for user registration and login.

## Technologies

- Vue.js 3.
- Vue Router.
- Vuex.
- Firebase Authentication.
- JavaScript (ES6+).
- CSS.

## What did I learn?

- Firebase Authentication: I learned how to integrate Firebase's authentication service into a Vue.js application and handle various authentication scenarios (login, registration, and session persistence).
- Vuex for State Management: I enhanced my understanding of Vuex by using it to manage user authentication state across the application.
- Navigation Guards with Vue Router: I learned to implement navigation guards to restrict access to certain routes based on the authentication status of the user.
- Component-based Architecture: Building reusable components like login and registration forms, while understanding how to handle reactive data binding in Vue.
- Asynchronous Operations: I improved my ability to handle asynchronous operations in JavaScript, particularly while dealing with authentication API calls.
