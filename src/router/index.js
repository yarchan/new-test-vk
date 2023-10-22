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
        path: '',
        name: 'get-friends',
        component: function () {
          return import(/* webpackChunkName: "friend" */ '../components/get-friends.vue')
        },
      },
      {
        path: 'list',
        name: 'List',
        component: function () {
          return import(/* webpackChunkName: "friend" */ '../components/list-friends.vue')
        },
      },
      {
        path: 'friend-info',
        name: 'friend-info',
        component: function () {
          return import(/* webpackChunkName: "friend" */ '../components/friend-info.vue')
        },
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
