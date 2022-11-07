import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'register',
      path: '/reg',
      component: () => import('@/views/register/register.vue')
      // webpack提供的import函数来路由懒加载导入组件
      // 路由懒加载，就是让页面路由切换到对应的页面才去加载让主页更小，更快
    },
    {
      path: '/login',
      component: () => import('@/views/login/login.vue')
    }
  ]
})
