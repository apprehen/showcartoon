<template>
  <div class="recommend">
    <Card>
      <!-- <span>你猜我想放什么</span> -->
    </Card>
    <ul class="recommend-main">
      <li v-for="(item,index) in recommendList" :key="index">
        <h2><img :src="item.imgUrl"></h2>
        <div class="recommend-showinfo">
          <h3>{{item.name}}</h3>
          <p>{{item.content}}</p>
          <div class="wifeage">
            {{item.age}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  name: 'Recommend',
  components: {
    Card
  },
  props: {
    recommendList: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.recommend{
  .recommend-main{
    li{
      position: relative;
      margin-bottom: 0.4286rem;
      background-color: rgba(255, 250, 250, 0.663);
      padding: 10px 0;
      height: 3.7143rem;
      width: 90%;
      margin-left: 5%;
      box-shadow: 0 0 10px rgba(0,0,0,.3);
      h2{
        position: absolute;
        left: 0.5714rem;
        height: 3.7143rem;
        width: 3.7143rem;
        img{
          width: 100%;
          border-radius: 0.2286rem;
        }
      }
      .recommend-showinfo{
        position: absolute;
        height: 2.8571rem;
        top: 0.5714rem;
        right: 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-right: 1.1429rem;
        // align-items: center;
        h3{
          font-size: 0.6286rem;
          // position: absolute;
        }
        p{
          font-size: 0.5714rem;
        }
        .wifeage{
          font-size: 0.5714rem;
        }
      }
    }
  }
}
</style>
