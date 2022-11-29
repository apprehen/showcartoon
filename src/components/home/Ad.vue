<template>
  <div class="ad">
    <img :src="this.imgUrl">
  </div>
</template>

<script>
export default {
  name: 'Ad',
  data () {
    return {
      imgUrl: require('@/public/images/Other/1.jpg')
    }
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
