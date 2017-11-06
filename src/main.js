import Vue from 'vue'
import app from './app.vue'
// import router from './router'
// import "./common/stylus/mixin.styl";

// import './mock/mockServer'

//声明使用插件
// Vue.use(VueResource)  // 内部给vm和组件对象添加一个属性$http(发送ajax请求)
 

new Vue({
  el: '#app',
  render: h => h(app),
  // router  // 配置路由器
})
