import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        signup: 'pages/signup.html',
        login: 'pages/login.html',
        forgotPassword: 'pages/forgot-password.html',
        resetPassword: 'pages/reset-password.html',
      },
    },
  },
});