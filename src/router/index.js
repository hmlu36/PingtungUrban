import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/apply',
        name: 'Apply',
        component: () =>
            import ('../views/Apply.vue')
    },
    {
        path: '/map',
        name: 'Map',
        component: () =>
            import ('../views/Map.vue')
    }, {
        path: '/zone',
        name: 'Zone',
        component: () =>
            import ('../views/Zone.vue')
    }, {
        path: '/preview',
        name: 'Preview',
        component: () =>
            import ('../views/Preview.vue')
    }, {
        path: '/edit',
        name: 'Edit',
        component: () =>
            import ('../views/Edit.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router