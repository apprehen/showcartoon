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
          imgUrl: require('@/public/images/Icons/1.png')
        },
        {
          id: 2,
          title: '不中嘞',
          imgUrl: require('@/public/images/Icons/2.jpg')
        },
        {
          id: 3,
          title: '寄寄子',
          imgUrl: require('@/public/images/Icons/3.jpg')
        },
        {
          id: 4,
          title: 'Komi桑',
          imgUrl: require('@/public/images/Icons/4.jpg')
        },
        {
          id: 5,
          title: '可爱捏',
          imgUrl: require('@/public/images/Icons/5.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
