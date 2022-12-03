<template>
  <div class="ad">
    <li v-for="(item,index) in adList" :key="index">
      <img :src="item.imgUrl">
    </li>
    <!-- <img :src="this.imgUrl"> -->
  </div>
</template>

<script>
export default {
  name: 'Ad',
  props: {
    adList: Array
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.ad{
  width: 100%;
  height: 6.0571rem;
  img{
    width: 100%;
  }
}
</style>
