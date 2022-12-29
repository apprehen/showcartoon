<template>
  <div class="like">
    <Card>
      <span>猜你喜欢</span>
    </Card>
    <ul>
      <li v-for="(item,index) in likeList" :key="index" @click="goDetail">
        <img v-lazy="item.imgUrl">
        <h1 class="like-title">{{item.title}}</h1>
        <div class="like-detail">{{item.content}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  name: 'Like',
  components: {
    Card
  },
  props: {
    likeList: Array
  },
  data () {
    return {
    }
  },
  methods: {
    goDetail () {
      // alert(11)
      this.$router.push({
        path: '/detail'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.like{
  ul{
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    li{
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      width: 50%;
      align-items: center;
      margin-bottom: 0.5714rem;
      height: auto;
      height: 8.5429;
      img{
        height: 8.1429rem;
        // width: 95%;
        // width: 4.693rem;
        border-radius: 0.2857rem;
      }
      .like-title{
        margin: 0.2286rem 0;
        font-size: 0.5143rem;
        color: #222;
      }
      .like-detail{
        margin-top: 0.1429rem;
        font-size: 0.5714rem;
        color: #b0352f;
      }
    }
  }
}
</style>
