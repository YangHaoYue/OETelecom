 import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

 const routes = [{
         path: '/',
         name: 'Home',
         component: () =>
             import ('../pages/home.vue')
     },
     {
         path: '/about',
         name: 'About',
         component: () =>
             import ('../pages/about/about.vue')
     },
     {
         path: '/joinus',
         name: 'JoinUs',
         component: () =>
             import ('../pages/joinUs.vue')
     },
     {
         path: '/news',
         name: 'News',
         component: () =>
             import ('../pages/news.vue')
     },
     {
         path: '/products',
         name: 'Products',
         component: () =>
             import ('../pages/products.vue')
     }
 ]

 const router = createRouter({
     history: createWebHashHistory(),
     routes
 })


 export default router