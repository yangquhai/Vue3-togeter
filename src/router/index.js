import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views/index.vue'

const routes = [
  {
    path: '/Ttablename=bxd_main/Turl=bxd.aspx/Tformnamecn=4366/Tsystem_lcmc=123',
    name: 'index',
    component: index
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
