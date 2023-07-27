import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import *as axios from '@/plugins/axios.js'
import { Search,Button  } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp();   //建立一个vue3app     

app.config.globalProperties.$axios=axios;  //配置axios的全局引用

app.use(Search,Button);

createApp(App).use(store).use(router).mount('#app')
