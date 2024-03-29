import { createRouter, createWebHistory } from 'vue-router'
import { users } from '../assets/users'
import store from '../store'
import Admin from '../views/Admin.vue'
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user/:userId',
        name: 'UserProfile',
        component: UserProfile
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        meta: {
            requiresAdmin: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    await store.dispatch('setUser', users[Number(to.params.userId) - 1])

    const isAdmin = false;
    const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

    if (requiresAdmin && !isAdmin) {
        next({ name: 'Home' });
    } else {
        next();
    }
})

export default router
