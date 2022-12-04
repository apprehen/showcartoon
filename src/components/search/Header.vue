<template>
  <div class="search-header">
    <!-- 左边 -->
    <div class="header-return" @click="goBack">
      <svg t="1670081844700" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2651" width="50" height="50"><path  d="M631.04 161.941333a42.666667 42.666667 0 0 1 63.061333 57.386667l-2.474666 2.730667-289.962667 292.245333 289.706667 287.402667a42.666667 42.666667 0 0 1 2.730666 57.6l-2.474666 2.752a42.666667 42.666667 0 0 1-57.6 2.709333l-2.752-2.474667-320-317.44a42.666667 42.666667 0 0 1-2.709334-57.6l2.474667-2.752 320-322.56z" fill="#111111" p-id="2652"></path></svg>
    </div>
    <!-- 中间 -->
    <div class="header-main">
      <svg t="1670081873255" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5111" width="200" height="200"><path d="M797.525333 752.266667c62.069333-72.736 97.28-165.002667 97.28-262.186667C894.816 266.528 713.621333 85.333333 490.08 85.333333 266.538667 85.333333 85.333333 266.538667 85.333333 490.069333 85.333333 713.610667 266.538667 894.826667 490.069333 894.826667a404.693333 404.693333 0 0 0 118.208-17.546667 32 32 0 0 0-18.666666-61.216 340.693333 340.693333 0 0 1-99.541334 14.762667C301.888 830.816 149.333333 678.261333 149.333333 490.069333 149.333333 301.888 301.888 149.333333 490.069333 149.333333 678.261333 149.333333 830.826667 301.888 830.826667 490.069333c0 89.28-35.381333 173.696-97.141334 237.322667a36.992 36.992 0 0 0 0.384 51.925333l149.973334 149.973334a32 32 0 0 0 45.258666-45.248L797.525333 752.266667z" p-id="5112"></path></svg>
      <form action="" onsubmit="return false">
        <input type="search" placeholder="搜索你喜欢的产品...">
      </form>
    </div>
    <div class="header-btn">
      搜索
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.search-header{
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
      path{
        // fill: #fff;
      }
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
  }
}
</style>
