const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    host: '192.168.1.186', // can be overwritten by process.env.HOST
    // host: 'localhost',
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    // open: true,// vue项目启动时自动打开浏览器
    proxy: {
        '/api': { // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
            target:  'http://dx.anywellchat.com:8888/ANYWELL_hylingls', //目标地址，一般是指后台服务器地址
            changeOrigin: true, //是否跨域
            pathRewrite: { // pathRewrite 的作用是把实际Request Url中的'/api'用""代替
                '^/api': "" 
            }
        }
    }
}
})
