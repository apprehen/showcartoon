import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: 'Home',
      path: '/home',
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
    },
    {
      name: 'Search',
      path: '/search',
      children: [
        {
          name: 'index',
          path: '/',
          component: () =>
            import('@/views/search/Searchindex.vue')
        },
        {
          name: 'list',
          path: 'list',
          component: () =>
            import('@/views/search/Searchlist.vue')
        }
      ],
      component: () =>
        import('@/views/Search.vue')
    },
    {
      name: 'Detail',
      path: '/detail',
      component: () =>
        import('@/views/Detail.vue')
    }
  ]
})
