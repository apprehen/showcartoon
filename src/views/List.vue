<template>
  <div class="list">
    <div class="list-header">
    <!-- 左边 -->
    <div class="header-return">
      <svg t="1670081844700" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2651" width="50" height="50"><path  d="M631.04 161.941333a42.666667 42.666667 0 0 1 63.061333 57.386667l-2.474666 2.730667-289.962667 292.245333 289.706667 287.402667a42.666667 42.666667 0 0 1 2.730666 57.6l-2.474666 2.752a42.666667 42.666667 0 0 1-57.6 2.709333l-2.752-2.474667-320-317.44a42.666667 42.666667 0 0 1-2.709334-57.6l2.474667-2.752 320-322.56z" fill="#111111" p-id="2652"></path></svg>
    </div>
    <!-- 中间 -->
    <div class="header-main">
      <svg t="1670081873255" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5111" width="200" height="200"><path d="M797.525333 752.266667c62.069333-72.736 97.28-165.002667 97.28-262.186667C894.816 266.528 713.621333 85.333333 490.08 85.333333 266.538667 85.333333 85.333333 266.538667 85.333333 490.069333 85.333333 713.610667 266.538667 894.826667 490.069333 894.826667a404.693333 404.693333 0 0 0 118.208-17.546667 32 32 0 0 0-18.666666-61.216 340.693333 340.693333 0 0 1-99.541334 14.762667C301.888 830.816 149.333333 678.261333 149.333333 490.069333 149.333333 301.888 301.888 149.333333 490.069333 149.333333 678.261333 149.333333 830.826667 301.888 830.826667 490.069333c0 89.28-35.381333 173.696-97.141334 237.322667a36.992 36.992 0 0 0 0.384 51.925333l149.973334 149.973334a32 32 0 0 0 45.258666-45.248L797.525333 752.266667z" p-id="5112"></path></svg>
      <form action="" onsubmit="return false">
        <input type="search" placeholder="搜索你喜欢..."
        >
      </form>
    </div>
    <div class="header-btn">
      <img src="static/images/Tabbar/home.png">
    </div>
    </div>
    <section>
      <div class="list-l" ref="left">
        <ul class="l-items">
          <li
          :class="{active:index === currentIndex}"
          v-for="(item,index) in leftData"
          :key="index"
          @click="goSrcoll(index)"
          >{{ item.name}}</li>
        </ul>
      </div>
      <div class="list-r" ref="right">
        <div>
          <div class="top-img">
            <img src="@/assets/img/list/top.jpg" alt="suki">
            <div>SUKI!</div>
          </div>
          <ul
          v-for="(item,index) in rightData"
          :key="index"
          class="shop-list">
            <li
            v-for="(k,i) in item"
            :key="i"
            >
              <h2>{{ k.name }}</h2>
              <ul class="r-content">
                <li v-for="(thriditem,thridindex) in k.list" :key="thridindex">
                  <img :src="thriditem.imgUrl">
                  <span>{{ thriditem.name }}</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../components/common/Tabbar.vue'
import http from '@/common/api/request.js'
import BScroll from '@better-scroll/core'
export default {
  /* eslint-disable */
  name: 'List',
  data () {
    return {
      leftData: [],
      rightData: [],
      rightBScoll: '',
      allHeight:[],
      // currentIndex:''
      scrollY: ''
    }
  },
  components: {
    Tabbar
  },
  async created () {
    let res = await http.$axios({
      url: '/api/list'
    })
    let leftArr = []
    let rightArr = []
    res.forEach(v => {
      leftArr.push({
        id: v.id,
        name: v.name
      })
      rightArr.push(v.data)
    })
    this.leftData = leftArr
    this.rightData = rightArr

    this.$nextTick(() => {
        new BScroll(this.$refs.left, {
          click: true
        })
        // 右侧滑动
        this.rightBScoll = new BScroll(this.$refs.right,{
          movable: true,
          zoom: true,
          click: true,
          probeType: 3
        })
        let height = 196
        this.allHeight.push(height)
        // 获取右侧每一块的高度
        let uls = this.$refs.right.getElementsByClassName('shop-list')
        // console.log(uls)
        // 把dom对象转化成真正的数组
        Array.from(uls).forEach(v => {
          height += v.clientHeight
          this.allHeight.push(height)
        })
        // 右侧滚动的值
        this.rightBScoll.on('scroll', (pos) => {
          this.scrollY = Math.abs(pos.y)
          // console.log(this.scrollY)
        })
      })
  },
  methods: {
    goSrcoll (index) {
      // console.log(this.allHeight[index+1])
      this.rightBScoll.scrollTo(0,-this.allHeight[index], 300)
    }
  },
  mounted () {
  },
  computed: {
    currentIndex () {
      return this.allHeight.findIndex((item,index) => {
        return this.scrollY >= item && this.scrollY < this.allHeight[index + 1]
      })
    }
  }
}
</script>

<style lang="less" scoped>
.list{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .list-header{
  width: 100%;
  height: 1.2571rem;
  display: flex;
  justify-content: space-around;
  background-color: #b0352f;
  align-items: center;
  .header-return{
    svg{
      stroke: #fff !important;
      height: 0.8rem;
      width: 0.8rem;
      font-size: 0.5714rem;
      path{
        fill: #fff;
      }
    }
  }
  .header-main{
    background-color: #fff;
    display: flex;
    border-radius: 0.3429rem;
    align-items: center;
    padding: 0.1714rem;
    width: 5.7143rem;
    svg{
      height: 0.6rem;
      width: 0.6rem;
      margin-right: 0.5rem;
    }
    form{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 180px;
      input{
        font-size: 0.4371rem;
      }
    }
  }
  .header-btn{
    color: #fff;
    font-size: 0.5714rem;
    padding-right: 0.266rem;
    img{
      width: 30px;
    }
  }
  }
  section{
    flex: 1;
    overflow: hidden;
    display: flex;
    position: relative;
    touch-action: none;
    height: fit-content;
    .list-l{
      width: 2.48rem;
      background-color: #fff;
      overflow: hidden;
      border-right: 1px solid #ccc;
      // background-color: red;
      .l-items{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        li{
          width: 100%;
          line-height: 1.1rem;
          text-align: center;
          margin-bottom: 0.2286rem;
          font-size: 0.437777rem;
        }
        .active{
          color: #b54f4a;
          border-left:6px solid #b54f4a ;
        }
      }
    }
    .list-r{
      width: 100%;
      height: 100%;
      overflow: hidden;
      .top-img{
        width: 100%;
        text-align: center;
        position: relative;
        img{
          border-radius: 10px;
          margin: 0.2857rem 0;
          width: 90%;
        }
        div{
          position: absolute;
          top: 0.4286rem;
          left: 0.5714rem;
          font-weight: bold;
          font-size: 24px;
        }
      }
      .shop-list{
        text-align: center;
        width: 100%;
        // height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        li{
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h2{
          font-size: 0.5714rem;
          font-weight: bold;
          width: 2rem;
          position: relative;
          // background-color: #b0352f;
          // width: 100px;
          &::before{
            content: '';
            width: 40px;
            position: absolute;
            // top: 0px;
            top: 43%;
            left: -25px;
            display: block;
            height: 3px;
            // left: 100px;
            background-color: #ccc;
          }
          &::after{
            content: '';
            width: 40px;
            position: absolute;
            // top: 0px;
            top: 43%;
            right: -25px;
            display: block;
            height: 3px;
            // left: 100px;
            background-color: #ccc;
          }
        }
        .r-content{
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          height: 100%;
          // justify-content: space-around;
          li{
            display: flex;
            flex-direction: column;
            width: 30%;
            height: 100%;
            margin-left: 3%;
            justify-content: space-around;
            align-items: center;
            padding: 0.2571rem 0;
            border-radius: 50%;
            img{
              border-radius: 50%;
              border: 1px solid #ccc;
              // width: 100%;
              height: 90px;
            }
            span{
              height: 15px;
              font-size: 0.4571rem;
            }
          }
        }
      }
    }
  }
  /deep/ .tabbar{
    border-top: 1px solid #ccc;
  }
}
</style>
