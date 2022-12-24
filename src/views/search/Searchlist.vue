<template>
  <div class="searchlist">
    <div class="headers">
      <Header></Header>
      <ul v-if="goodList.length">
        <li v-for="(item,index) in searchList.data" :key="index" @click="changeTab(index)">
          <div :class="searchList.currentIndex === index?'active':''">{{item.name}}</div>
          <div class="arrowicon" v-if="index != 0">
            <svg t="1671815830471" class="icon" :class="item.status == 1?'active':''"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2663" width="16" height="16"><path d="M573.056 272l308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z" fill="#000000" p-id="2664"></path></svg>
            <svg t="1671815885252" class="icon" :class="item.status == 2?'active':''" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3678" width="16" height="16"><path d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z" fill="#000000" p-id="3679"></path></svg>
          </div>
        </li>
      </ul>
      <h1 v-else>暂无数据...</h1>
    </div>
    <section>
      <ul>
        <li v-for="(item,index) in goodList" :key="index">
          <img :src="item.imgUrl">
          <h3>{{item.name}}</h3>
          <div class="price">
            <div>
              <b>{{item.price}}</b>
            </div>
            <div>立即购买</div>
          </div>
        </li>
      </ul>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from '@/components/search/Header.vue'
import Tabbar from '@/components/common/Tabbar.vue'
import http from '@/common/api/request.js'
export default {
  name: 'Searchlist',
  data () {
    return {
      goodList: [],
      searchList: {
        currentIndex: 0,
        /*
          status:0 都不亮
          status:1 上箭头亮
          status:2 下箭头亮
        */
        data: [
          {name: '综合'},
          {name: '价格', status: 0, key: 'price'},
          {name: '销量', status: 0, key: 'num'}
        ]
      }
    }
  },
  components: {
    Header,
    Tabbar
  },
  computed: {
    orderBy () {
      let obj = this.searchList.data[this.searchList.currentIndex]
      let val = obj.status === 1 ? 'asc' : 'desc'
      console.log(obj)
      return {
        type: obj.key,
        ordermethod: val
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    async getData () {
      let res = await http.$axios({
        baseURL: 'http://localhost:3000',
        url: 'api/goods/shopList',
        params: {
          searchName: this.$route.query.key,
          ...this.orderBy
        }
      })
      // console.log(res)
      this.goodList = res
    },
    changeTab (index) {
      this.searchList.currentIndex = index
      let item = this.searchList.data[index]
      // 遍历
      this.searchList.data.forEach((v, i) => {
        if (i !== index) {
          v.status = 0
        }
      })
      // 改变排序
      if (index === this.searchList.currentIndex) {
        item.status = item.status === 1 ? 2 : 1
      }
      this.getData()
    }
  },
  watch: {
    $route () {
      this.getData()
    }
  }
}
</script>

<style lang="less" scoped>
.searchlist{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .headers{
    h1{
      font-size: 28px;
      margin-top: 0.2857rem;
      margin-left: 0.5714rem;
    }
    ul{
      display: flex;
      justify-content: space-around;
      padding: 0.4286rem 0;
      font-size: 0.4571rem;
      li{
        display: flex;
        justify-content: center;
        align-items: center;
        .arrowicon{
          display: flex;
          margin-left: 0.1714rem;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
  section{
    flex: 1;
    overflow: hidden;
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.1429rem;
        box-sizing: border-box;
        img{
          width: 4.8571rem;
          border-radius: 0.2857rem;
        }
        h3{
          padding: 0.1143rem;
          width: 100%;
          font-size: 0.4rem;
          color: #222;
          font-weight: 600;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .price{
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-size: 0.4571rem;
          align-items: center;
          padding: 0.1714rem 0;
          b{
            color: #b0352f;
            font-size: 0.4571rem;
            &::before{
              font-size: 0.3429rem;
              color: #b0352f;
              content: '￥';
            }
          }
          div{
            &:last-child{
              padding: 3px 0.1714rem;
              color: #fff;
              border-radius: 0.0857rem;
              background-color: #b0352f;
            }
          }
        }
      }
    }
  }
}
.active{
  color: red;
  path{
    fill: red;
  }
}
</style>
