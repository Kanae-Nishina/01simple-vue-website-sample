import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Work from '../components/Work.vue'
import Service from '../components/Service.vue'
import Blog from '../components/Blog.vue'
import Access from '../components/Access.vue'
 
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
  ,
  {
    path: '/work',
    name: 'work',
    component: Work
  }
  ,
  {
    path: '/service',
    name: 'service',
    component: Service
  }
  ,
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  }
  ,
  {
    path: '/access',
    name: 'access',
    component: Access
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;