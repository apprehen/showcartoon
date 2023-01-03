<template>
  <div>
    <!-- <div v-for="(item, index) in students.hobby" :key="index"> {{item}}</div> -->
    <div>{{this.hobby[0] }}</div>
    <button @click="change()">change</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      hobby: ['抽烟', '喝酒', '烫头']
    }
  },
  watch: {
    hobby: {
      handler (newV,oldV) {
        console.log(newV,oldV)
        // this.hobby = newV
      },
      deep: true,
      immediate:true
    }
  },
  methods: {
    change () {
      // this.students.hobby.splice(0, 1, '开车')
      this.hobby[0] = '开车'
      console.log(this.hobby)
    }
  }
}
</script>

<style lang="less" scoped>
div{
  font-size: 25px;
}
</style>
