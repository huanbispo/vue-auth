import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Login from './pages/auth/LoginAuth.vue'
import RegisterAuth from './pages/auth/RegisterAuth.vue'
import ForgotPassword from './pages/auth/ForgotPassword.vue'
import TokenValidation from './pages/auth/TokenValidation.vue'

// Implementation
const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Login Page for Authentication
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },
        // Register page
        { path: '/signUp', component: RegisterAuth },
        // Forgot password that'll send an email to the user
        { path: '/forgotPassword', component: ForgotPassword },
        // validate for first entry to the app (Send token to the user's phone)
        { path: '/validate', component: TokenValidation },
    ]
});

export default router;
