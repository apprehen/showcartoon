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
    <section ref="wrapper" class="wrapper">
      <div>
        <div v-for="(item,index) in newData"
        :key="index"
        >
          <Swiper
          v-if="item.type == 'SwiperList'"
          :swiperList="item.data"
          ></Swiper>
          <Icons
          v-if="item.type == 'IconsList'"
          :iconsList="item.data"
          ></Icons>
          <Recommend
          v-if="item.type == 'RecommendList'"
          :recommendList="item.data"
          ></Recommend>
          <Ad
          v-if="item.type == 'AdList'"
          :adList="item.data"
          ></Ad>
          <Like
          v-if="item.type == 'LikeList'"
          :likeList="item.data"
          ></Like>
        </div>
      </div>
    </section>
    <Tabbar></Tabbar>
    <!-- <img src="./images/Swiper/1.jpg" alt=""> -->
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
import http from '@/common/api/request.js'
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
    // this.addData(0)
  },
  mounted () {
  },
  methods: {
    getheight () {
      this.$nextTick(() => {
        let bs = new BScroll(this.$refs.wrapper, { // eslint-disable-line no-unused-vars
          movable: true,
          zoom: true,
          click: true
        })
      })
    },
    changeTab (item, index) {
      this.addData(index)
    },
    async getData () {
      let res = await http.$axios({
        baseURL: 'http://localhost:3000',
        url: 'api/index_list/0/data/1'
      })
      //  性能优化
      this.items = Object.freeze(res.topBar)
      this.newData = Object.freeze(res.data)
      this.getheight()
    },
    async addData (index) {
      let res = await http.$axios({
        baseURL: 'http://localhost:3000',
        url: `api/index_list/${index}/data/1`
      })
      // console.log(res.data.data)
      if (res.constructor !== Array) {
        this.newData = res.data
      } else {
        this.newData = res
      }
      this.getheight()
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
  touch-action: none;
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
    position: relative;
    touch-action: none;
    height: fit-content;
  }
}
.wrapper{
  position: relative;
  touch-action: none;
}
</style>
