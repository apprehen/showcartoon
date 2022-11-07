<template>
  <div id="test">
    {{meg}}
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      meg: '嗨嗨嗨'
    }
  }
}
</script>

<style scoped lang="less">
.test{
  font-size: 20px;
  color: aquamarine;
}
</style>
