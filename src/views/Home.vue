<template>
  <div class="home">
    <div class="home-headers">
      <div class="headers-main">
        <Header></Header>
        <ly-tab
          v-model="selectedId"
          :items="items"
          :options="options"
          @change="changeTab"
        />
      </div>
    </div>
    <section ref="wrapper">
      <div>
        <Swiper v-if="true"></Swiper>
        <Icons v-if="true"></Icons>
        <Recommend v-if="true"></Recommend>
        <Like v-if="true"></Like>
        <Ad v-if="false"></Ad>
        <!-- <Like></Like> -->
      </div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
//  引入主页组件
import Header from '@/components/home/header.vue'
import Swiper from '@/components/home/Swiper.vue'
import Icons from '@/components/home/Icons.vue'
import Recommend from '@/components/home/Recommend.vue'
import Like from '@/components/home/Like.vue'
import Tabbar from '@/components/common/Tabbar.vue'
// 引入不同tab的组件
import Ad from '@/components/home/Ad.vue'
//  引入scroll组件 (中间滑动)
import BScroll from '@better-scroll/core'
// import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      names: 'wife',
      selectedId: 0,
      items: [
        {label: 'Megumi'},
        {label: 'Komi'},
        {label: 'toka'},
        {label: 'kurumi'},
        {label: 'Miku'},
        {label: '七罪'},
        {label: '祈妹'},
        {label: 'saber'}
      ],
      options: {
        activeColor: '#f00',
        reBoundExponent: 100,
        reBoundingDuration: 560
      }
    }
  },
  components: {
    Header,
    Swiper,
    Icons,
    Tabbar,
    Recommend,
    Like,
    Ad
  },
  created () {
    // axios({
    //   url: 'http://localhost:3000/api/home',
    //   method: 'GET'
    // }).then(res => {
    //   console.log(res)
    // })
  },
  mounted () {
    let bs = new BScroll(this.$refs.wrapper, { // eslint-disable-line no-unused-vars
      movable: true,
      zoom: true
    })
  },
  methods: {
    changeTab (item, index) {
      console.log(item, index)
    }
  }
}
</script>

<style lang="less" scoped>
.home{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .home-headers{
    width: 100%;
    height: 3rem;
    overflow: hidden;
  }
  .headers-main {
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  z-index: 999;
  }
  section{
    flex: 1;
    overflow: hidden;
  }
}
</style>
