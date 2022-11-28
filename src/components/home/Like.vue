<template>
  <div class="like">
    <Card>
      <span>猜你喜欢</span>
    </Card>
    <li v-for="(item,index) in LikeList" :key="index">
      <img :src="item.imgUrl">
      <h1 class="like-title">{{item.title}}</h1>
      <div class="like-detail">{{item.content}}</div>
    </li>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  name: 'Like',
  components: {
    Card
  },
  data () {
    return {
      LikeList: [
        {
          id: 1,
          title: '兔兔娘',
          content: 'FF14性感兔娘',
          imgUrl: require('@/public/images/Likes/1.jpg')
        },
        {
          id: 2,
          title: '丽贝卡',
          content: '亚当重锤',
          imgUrl: require('@/public/images/Likes/2.jpg')
        },
        {
          id: 3,
          title: 'Miku',
          content: 'fufu可爱捏',
          imgUrl: require('@/public/images/Likes/3.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
