import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () =>
        import('@/views/Home.vue')
    },
    {
      name: 'List',
      path: '/list',
      component: () =>
        import('@/views/List.vue')
    },
    {
      name: 'Cart',
      path: '/cart',
      component: () =>
        import('@/views/Cart.vue')
    },
    {
      name: 'My',
      path: '/my',
      component: () =>
        import('@/views/My.vue')
    }
  ]
})
