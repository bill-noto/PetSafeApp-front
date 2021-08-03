import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Newsroll from '../views/Newsroll.vue'
import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/news',
        name: 'Newsroll',
        component: Newsroll
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
