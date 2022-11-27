<template>
  <div class="swiper-main">
    <swiper :options = "swiperOption">
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img :src="item.imgurl">
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination" id="dots"></div>
  </div>
</template>

<script>
import 'Swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperList: [
        {
          id: 1,
          imgurl: require('@/public/images/Swiper/1.jpg')
        },
        {
          id: 2,
          imgurl: require('@/public/images/Swiper/2.jpg')
        },
        {
          id: 3,
          imgurl: require('@/public/images/Swiper/3.jpg')
        },
        {
          id: 4,
          imgurl: require('@/public/images/Swiper/4.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-container{
  height: 5rem;
}
.swiper-main{
  width: 100%;
  height: 5rem;
  overflow: hidden;
  margin-top: 3rem;
  position: relative;
  img{
    width: 100%;
  }
}
.swiper-pagination#dots{
    width: 100%;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    bottom: 0.1429rem;
    /deep/ span.swiper-pagination-bullet{
      // margin-right: 0.5714rem;
      width: 15px;
      height: 15px;
      margin-right: 8px;
      background: #000;
    }
    /deep/ .swiper-pagination-bullet-active{
      background-color: #b0352f !important;
    }
  }
</style>
