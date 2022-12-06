<template>
  <div class="search-index">
    <Header></Header>
    <section>
      <div class="search-history" v-if="searchArr.length">
        <h2>
          <svg t="1670083870884" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6077" width="200" height="200"><path d="M878.08 731.274667a32 32 0 0 1-54.88-32.938667A360.789333 360.789333 0 0 0 874.666667 512c0-200.298667-162.368-362.666667-362.666667-362.666667S149.333333 311.701333 149.333333 512s162.368 362.666667 362.666667 362.666667a360.789333 360.789333 0 0 0 186.314667-51.445334 32 32 0 0 1 32.928 54.88A424.778667 424.778667 0 0 1 512 938.666667C276.362667 938.666667 85.333333 747.637333 85.333333 512S276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667c0 78.293333-21.152 153.568-60.586667 219.274667z m-548.704-81.898667L480 498.741333V320a32 32 0 0 1 64 0v192a32 32 0 0 1-9.376 22.624l-160 160a32 32 0 1 1-45.248-45.248z" p-id="6078" fill="#d81e06"></path></svg>
          <span>历史搜索</span>
          <span class="search-clear" @click="deletehistory">清空历史记录</span>
        </h2>
        <ul>
          <li v-for="(item,index) in searchArr" :key="index">{{item}}</li>
        </ul>
      </div>
      <div v-else class="nonono">暂无搜索记录</div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from '@/components/search/Header.vue'
import Tabbar from '@/components/common/Tabbar.vue'
import { MessageBox } from 'mint-ui'
export default {
  name: 'Searchindex',
  data () {
    return {
      searchArr: []
    }
  },
  components: {
    Header,
    Tabbar
  },
  created () {
    this.searchArr = JSON.parse(localStorage.getItem('searchList')) || []
  },
  methods: {
    deletehistory () {
      MessageBox({
        title: 'Notice',
        message: 'Are you sure?',
        showCancelButton: true
      })
        .then(res => {
          // console.log(res)
          if (res === 'confirm') {
            localStorage.removeItem('searchList')
            this.searchArr = []
          }
        })
    }
  }
}
</script>

<style lang="less" scoped>
.search-index{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  section{
    flex: 1;
    overflow: hidden;
    .search-history{
      padding: 0.5714rem;
      h2{
        display: flex;
        align-items: center;
        position: relative;
        svg{
          width: 0.7143rem;
          height: 0.7143rem;
          margin-right: 0.1429rem;
        }
        span{
          font-size: 0.5714rem;
          font-weight: 600;
        }
        .search-clear {
          position: absolute;
          right: 0px;
          font-size: 0.4rem;
          border: 1px solid #ccc;
          padding: 0.1rem 0.1857rem;
        }
      }
      ul{
        padding: 0.5714rem,0.2286rem;
        display: flex;
        flex-wrap: wrap;
        li {
          border: 0.0286rem solid #ccc;
          font-size: 0.4571rem;
          padding: 0.0857rem 0.1714rem;
          margin-top: 0.3857rem;
          margin-right: 0.5857rem;
        }
      }
    }
  }
}
.nonono{
  font-size: 0.5143rem;
  font-weight: 700;
  margin-left: 0.5714rem;
  margin-top: 0.5714rem;
}
</style>
