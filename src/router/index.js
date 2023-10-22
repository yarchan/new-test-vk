import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'friends',
    component: function () {
      return import(/* webpackChunkName: "friends" */ '../views/Friends.vue')
    },
    children:[
      { 
        path: 'get-friends',
        name: 'get-friends',
        component: function () {
          return import(/* webpackChunkName: "get-friends" */ '../components/get-friends.vue')
        }
      },
      { 
        path: 'list-friends',
        name: 'list-friends',
        component: function () {
          return import(/* webpackChunkName: "list-friends" */ '../components/list-friends.vue')
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
