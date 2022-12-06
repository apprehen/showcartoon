<template>
  <div class="search">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/search/Header.vue'
import Tabbar from '@/components/common/Tabbar.vue'
export default {
  name: 'Search',
  components: {
    Header,
    Tabbar
  }
}
</script>

<style lang="less" scoped>

</style>
