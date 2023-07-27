import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import *as axios from '@/plugins/axios.js'
import 'amfe-flexible'
import vant from 'vant';
import 'vant/lib/index.css';

const app = createApp();   //建立一个vue3app     

app.config.globalProperties.$axios=axios;  //配置axios的全局引用


createApp(App).use(store).use(router).use(vant).mount('#app')
