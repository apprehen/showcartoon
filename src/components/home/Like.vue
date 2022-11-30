<template>
  <div class="like">
    <Card>
      <span>猜你喜欢</span>
    </Card>
    <ul>
      <li v-for="(item,index) in LikeList" :key="index">
        <img :src="item.imgUrl">
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
  data () {
    return {
      LikeList: [
        {
          id: 1,
          title: '兔兔娘',
          content: 'FF14性感兔娘',
          imgUrl: './images/Likes/1.jpg'
        },
        {
          id: 2,
          title: '丽贝卡',
          content: '亚当重锤',
          imgUrl: './images/Likes/2.jpg'
        },
        {
          id: 3,
          title: 'Miku',
          content: 'fufu可爱捏',
          imgUrl: './images/Likes/3.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.like{
  ul{
    display: flex;
    flex-wrap: wrap;
    li{
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      width: 50%;
      align-items: center;
      margin-bottom: 0.5714rem;
      img{
        height: 11rem;
        width: 4.693rem;
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
