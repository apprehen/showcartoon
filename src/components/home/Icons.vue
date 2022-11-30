<template>
  <div class="icons">
    <li v-for="(item,index) in iconsList" :key="index">
      <img :src="item.imgUrl">
      <span>{{item.title}}</span>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  data () {
    return {
      iconsList: [
        {
          id: 1,
          title: '栗帽',
          imgUrl: './images/Icons/1.png'
        },
        {
          id: 2,
          title: '不中嘞',
          imgUrl: './images/Icons/2.jpg'
        },
        {
          id: 3,
          title: '寄寄子',
          imgUrl: './images/Icons/3.jpg'
        },
        {
          id: 4,
          title: 'Komi桑',
          imgUrl: './images/Icons/4.jpg'
        },
        {
          id: 5,
          title: '可爱捏',
          imgUrl: './images/Icons/5.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.icons{
  display: flex;
  width: 95%;
  margin-left: 2.5%;
  justify-content: space-between;
  padding: 0.4rem 0;
  li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
      width: 1.013rem;
      height: 1.013rem;
      border-radius: 0.0857rem;
    }
    span{
      padding: 0.16rem 0;
      font-size: 0.426666rem;
    }
  }
}
</style>
