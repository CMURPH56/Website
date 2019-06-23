import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/HomeLanding.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [    
    {
      path: '/',
      name: 'HomeLanding',
      component: () => import( './components/HomeLanding.vue')
    },
    {
      path: '/About',
      name: 'About',
      component: () => import( './components/About.vue')
    },
    {
      path: '/Blogs',
      name: 'Blogs',
      component: () => import( './components/Blogs.vue')
    },
    {
      path: '/Blogs/RouterLinkArticle',
      name: 'RouterLinkArticle',
      component: () => import( './Blogs/RouterLinkArticle.vue')
    }
  ]
})
