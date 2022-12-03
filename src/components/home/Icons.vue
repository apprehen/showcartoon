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
  props: {
    iconsList: Array
  },
  data () {
    return {
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
