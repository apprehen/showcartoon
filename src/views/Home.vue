<template>
  <div class="home">
    <div class="home-headers">
      <div class="headers-main">
        <Header></Header>
        <ly-tab
          v-model="selectedId"
          :items="items"
          :options="options"
        />
      </div>
    </div>
    <section class="wrapper">
      <div>
        <Swiper></Swiper>
        <Icons></Icons>
        <Recommend></Recommend>
        <Like></Like>
      </div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from '@/components/home/header.vue'
import Swiper from '@/components/home/Swiper.vue'
import Icons from '@/components/home/Icons.vue'
import Recommend from '@/components/home/Recommend.vue'
import Like from '@/components/home/Like.vue'
import Tabbar from '@/components/common/Tabbar.vue'
//  引入scroll组件 (中间滑动)
import BScroll from '@better-scroll/core'
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
    Like
  },
  mounted () {
    let bs = new BScroll('.wrapper', { // eslint-disable-line no-unused-vars
      movable: true,
      zoom: true
    })
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
