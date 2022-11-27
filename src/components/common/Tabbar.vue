<template>
  <div class="tabbar">
    <!-- 这是底部Tabbar -->
    <ul>
      <li v-for="(item,index) in routerList" :key="index"
      @click="switchTab(item.path)"
      >
        <img :src="$route.path.includes(item.path) ? item.selected:item.active">
        <span :class="$route.path.includes(item.path) ? 'active' :' '">{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {
      routerList: [
        {
          title: '首页',
          path: '/home',
          active: require('@/public/images/Tabbar/home.png'),
          selected: require('@/public/images/Tabbar/home-active.png')
        },
        {
          title: '分类',
          path: '/list',
          active: require('@/public/images/Tabbar/list.png'),
          selected: require('@/public/images/Tabbar/list-active.png')
        },
        {
          title: '购物',
          path: '/cart',
          active: require('@/public/images/Tabbar/cart.png'),
          selected: require('@/public/images/Tabbar/cart-active.png')
        },
        {
          title: '我的',
          path: '/my',
          active: require('@/public/images/Tabbar/my.png'),
          selected: require('@/public/images/Tabbar/my-active.png')
        }
      ]
    }
  },
  methods: {
    switchTab (path) {
      //  判断是否点击的路由是同一个
      if (this.$route.path === path) return
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="less" scoped>
.tabbar{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.7143rem;
  background-color: #fff;
  ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    align-items: center;
    li{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img{
        width: 0.8857rem;
      }
      span{
        font-size: 0.4571rem;
      }
      .active{
        color:red;
      }
    }
  }
}
</style>
