import Vue from 'vue'
import VueRouter from 'vue-router'
import header from '../components/header/header.vue'
import conter from '../components/conter/conter.vue'
import footer from '../components/footer/footer.vue'



// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass:"active",
  routes: [ // 配置多个路由
    {
      path: '/header',
      component: header
    },
    {
      path: '/life',
      component: life
    },
    {
      path: '/play',
      component: play
    },
    {
      path: '/fuzhuangy',
      component: fuzhuang
    },
    {
      path: '/eat',
      component: eat
    },
    {
      path: '/',
      redirect: '/header'
    }
  ]
})
