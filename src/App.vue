<template>
  <div id="app">
    <!-- 一级路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
import test from '@/components/test.vue'
export default {
  name: 'App',
  components: {test}
}
</script>

<style scoped lang="less">
#test{
  width: 300px;
  height: 300px;
  background-color: pink;
  margin-top: 50px;
}
</style>
