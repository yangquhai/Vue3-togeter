import axios from "axios";
// import store from "../../store/store";
// import { config } from "vue/types/umd";

axios.defaults.timeout = 5000  // 接口响应时间
// axios.defaults.baseURL = 'https://mock.apifox.cn/m1/1014400-0-default'  // 接口地址
// axios.defaults.baseURL = 'http://media.yqqnas.fun:180'
// axios.defaults.baseURL = 'https://api.fireopen.cn'
axios.defaults.baseURL = '/apis'
// 返回状态判断(请求拦截器)
axios.interceptors.request.use(
    config => {

        // 发送请求前需要做的事
        // 携带请求头
        // store.commit("updateApiCount", "add");
        // if(store.state.token){
        //     // config.headers.common['Authorization'] = store.state.token;
        //     // config.headers['Authorization']=window.localStorage.token
        //     // console.log(store.state.token)
        //     console.log("===================================")
        // }
        console.log("===================================")
        return config
    }, (error) => {
        // store.commit("updateApiCount", "sub");
        return Promise.reject(error)
    })

// 返回状态判断(响应拦截器)
axios.interceptors.response.use((res) => {
    // store.commit("updateApiCount", "sub");
    // 对响应数据做的事
    return res
}, (error) => {
    // store.commit("updateApiCount", "sub");
    return Promise.reject(error)
})