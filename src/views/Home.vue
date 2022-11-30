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
        <div v-for="(item,index) in newData"
        :key="index"
        >
        <!-- {{item}} -->
          <Swiper
          v-if="item.type == 'SwiperList'"
          :swiperList="item.data"
          ></Swiper>
          <Icons v-if="item.type == 'IconsList'"></Icons>
          <Recommend v-if="item.type == 'RecommendList'"></Recommend>
          <Ad v-if="item.type == 'AdList'"></Ad>
          <Like v-if="item.type == 'LikeList'"></Like>
        </div>
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
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      names: 'wife',
      selectedId: 0,
      items: [],
      newData: [],
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
    this.getData()
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
    },
    async getData () {
      let res = await axios({
        method: 'GET',
        baseURL: 'http://localhost:3000',
        url: 'api/index_list/0/data/1',
        headers: {'Content-type': 'application/json'}
      })
      //  性能优化
      this.items = Object.freeze(res.data.data.topBar)
      // console.log(res.data.data.topBar)
      this.newData = Object.freeze(res.data.data.data)
      // console.log(res.data.data.data)
      // console.log(this.newData)
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
