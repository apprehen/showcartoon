<template>
  <div class="login">
    <div class="bgmengban"></div>
    <video class="vvv" loop autoplay muted>
      <source src="@/assets/video/login.mp4" type="video/mp4">
    </video>
    <div class="login_warpper">
      <el-form>
        <el-form-item label="用户名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my_login'
}
</script>

<style scoped lang="less">
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.login{
  width: 100vw;
  height: 100vh;
  transform: scale(1.0);
  overflow: hidden;
  .vvv{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
  }
  .bgmengban{
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 2;
    background: rgba(0,0,0,0.85);
  }
}
</style>
