<template>
  <div class="searchlist">
    <div class="headers">
      <Header></Header>
      <ul>
        <li>综合</li>
        <li>
          <div>价格</div>
          <svg t="1670296434493" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1946" width="16" height="16"><path d="M512.03799 0 921.675981 411.648 102.4 411.648 512.03799 0ZM512.03799 995.328 102.4 583.68 921.675981 583.68 512.03799 995.328Z" p-id="1947" fill="#2c2c2c"></path></svg>
        </li>
        <li>
          <div>销量</div>
          <svg t="1670296434493" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1946" width="16" height="16"><path d="M512.03799 0 921.675981 411.648 102.4 411.648 512.03799 0ZM512.03799 995.328 102.4 583.68 921.675981 583.68 512.03799 995.328Z" p-id="1947" fill="#2c2c2c"></path></svg>
        </li>
      </ul>
    </div>
    <section>
      <ul>
        <li>
          <img src="static/images/Goods/1.jpg">
          <h3>黑甚于黑 暗之漆黑,渴求融合我之真红吧,觉醒之时已然来临,真理坠入无缪境界,化为无形扭曲 显现吧,Explosion!!</h3>
          <div class="price">
            <div>
              <b>520</b>
            </div>
            <div>立即购买</div>
          </div>
        </li>
        <li>
          <img src="static/images/Goods/2.jpg">
          <h3>黑甚于黑 暗之漆黑,渴求融合我之真红吧,觉醒之时已然来临,真理坠入无缪境界,化为无形扭曲 显现吧,Explosion!!</h3>
          <div class="price">
            <div>
              <b>520</b>
            </div>
            <div>立即购买</div>
          </div>
        </li>
        <li>
          <img src="static/images/Goods/3.jpg">
          <h3>黑甚于黑 暗之漆黑,渴求融合我之真红吧,觉醒之时已然来临,真理坠入无缪境界,化为无形扭曲 显现吧,Explosion!!</h3>
          <div class="price">
            <div>
              <b>520</b>
            </div>
            <div>立即购买</div>
          </div>
        </li>
        <li>
          <img src="static/images/Goods/4.jpg">
          <h3>黑甚于黑 暗之漆黑,渴求融合我之真红吧,觉醒之时已然来临,真理坠入无缪境界,化为无形扭曲 显现吧,Explosion!!</h3>
          <div class="price">
            <div>
              <b>520</b>
            </div>
            <div>立即购买</div>
          </div>
        </li>
        <li>
          <img src="static/images/Goods/5.jpg">
          <h3>黑甚于黑 暗之漆黑,渴求融合我之真红吧,觉醒之时已然来临,真理坠入无缪境界,化为无形扭曲 显现吧,Explosion!!</h3>
          <div class="price">
            <div>
              <b>520</b>
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
export default {
  name: 'Searchlist',
  components: {
    Header,
    Tabbar
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
    ul{
      display: flex;
      justify-content: space-around;
      padding: 0.4286rem 0;
      font-size: 0.4571rem;
      li{
        display: flex;
        justify-content: center;
        align-items: center;
        svg{
          margin-left: 0.1714rem;
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
</style>
