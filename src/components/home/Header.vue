<template>
  <div class="home-header">
    <div class="logo">
      <img src="@/assets/img/logo.jpg" alt="">
    </div>
    <div class="search">
      <svg t="1669539667417" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2686" width="200" height="200"><path d="M685.6 660.336l155.152 155.168a16 16 0 0 1 0 22.624l-11.312 11.328a16 16 0 0 1-22.624 0l-158.528-158.544a289.792 289.792 0 0 1-165.152 51.36C322.336 742.256 192 611.904 192 451.12 192 290.336 322.336 160 483.136 160c160.784 0 291.12 130.336 291.12 291.136 0 82.112-33.984 156.272-88.672 209.2z m-202.464 33.92c134.272 0 243.12-108.848 243.12-243.12C726.256 316.848 617.408 208 483.136 208 348.848 208 240 316.848 240 451.136c0 134.272 108.848 243.12 243.136 243.12z" p-id="2687"></path></svg>
      <span>搜您喜欢的... </span>
    </div>
    <div class="kefu">
      <svg t="1669539760286" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4423" width="200" height="200"><path d="M972.8 409.6h-51.2A409.6 409.6 0 0 0 102.4 409.6H51.2a51.2 51.2 0 0 0-51.2 51.2v204.8a51.2 51.2 0 0 0 51.2 51.2h153.6V409.6a307.2 307.2 0 0 1 614.4 0v384a128 128 0 0 1-128 128H512v102.4h179.2a230.4 230.4 0 0 0 230.4-230.4V716.8h51.2a51.2 51.2 0 0 0 51.2-51.2V460.8a51.2 51.2 0 0 0-51.2-51.2z" p-id="4424"></path><path d="M716.8 563.2h-102.4a102.4 102.4 0 0 1-204.8 0H307.2a204.8 204.8 0 0 0 409.6 0z" p-id="4425"></path></svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="less" scoped>
.home-header{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 1.6rem;
  z-index: 999;
  background-color: #b0352f;
  .logo{
    width: 2.05rem;
    height: 1.3333333rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      border-radius: 0.2286rem;
      width: 100%;
    }
  }
  .search{
    width: 6.56rem;
    height: 0.8rem;
    background-color: #fff;
    border-radius: 0.3429rem;
    display: flex;
    align-items: center;
    svg{
      width: 0.8rem;
      height: 0.8571rem;
    }
    span{
      font-size: 0.5143rem;
      color: rgb(134, 130, 130);
    }
  }
  .kefu{
    font-size: 1.0286rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      width: 0.8571rem;
      height: 0.8571rem;
    }
  }
}
</style>
