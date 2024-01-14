import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views/index.vue'
import live from '../views/zhibo.vue'
import admin from '../views/admin.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/live',
    name: 'live',
    component: live,
    beforeEnter: (to, from, next) => {
      document.title = '直播' // 根据页面状态设置标题
      next()
  }
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
    beforeEnter: (to, from, next) => {
      document.title = '后台管理' // 根据页面状态设置标题
      next()
  }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
