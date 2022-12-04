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
  height: fit-content;
  overflow: hidden;
  height: fit-content;
  block-size: fit-content;
  li{
    // height: 5.7143rem;
  }
  img{
    // height: fit-content;
    width: 100%;

  }
}
</style>
