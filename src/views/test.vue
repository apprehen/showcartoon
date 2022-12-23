<template>
  <div>
    <ul v-for="(item,index) in bookData" :key="index">
      <li>{{item.code}}--{{item.book_name}} -- {{item.author}}</li>
    </ul>
  </div>
</template>

<script>

export default {
/* eslint-disable */
  data () {
    return {
      bookData: [
          {
            "code": "xasdw12312",
            "book_name": "活着",
            "type": 1,
            "author":  "余华",
            "press": "清华大学出版社",
            "price": 23.3,
            "comment": 9,
            "cover": "huozhe.png",
            "stock": 100
          },{
            "code": "xasdw12312",
            "book_name": "死了",
            "type": 1,
            "author":  "余华",
            "press": "清华大学出版社",
            "price": 23.3,
            "comment": 9,
            "cover": "huozhe.png",
            "stock": 100
          },
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
