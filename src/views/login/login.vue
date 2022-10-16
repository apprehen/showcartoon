<template>
  <div class="login">
    <div class="bgmengban"></div>
    <video class="vvv" loop autoplay muted>
      <source src="@/assets/video/login.mp4" type="video/mp4">
    </video>
    <div class="login_warpper">
      <div class="login_left">
        <div class="login_left_top">
          <img src="@/assets/img/avter.jpg" alt="可爱捏">
          <div class="top_shu"></div>
          <div class="top_heng"></div>
        </div>
        <div class="login_left_middle">
          <h1 class="middle_title"> Apprehen </h1>
          <div class="middle_desc">记录想做的事情</div>
        </div>
        <div class="login_left_bottom">
          <div class="bottom_heng"></div>
          <div class="bottom_shu"></div>
          <div class="bottom_desc">记录TO DO LIST 的站点</div>
        </div>
      </div>
      <div class="login_right">
        <h1 class="title">TODOLIST管理后台</h1>
        <el-form :label-position="labelPosition" label-width="80px">
          <el-form-item label="用户名">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my_login',
  data () {
    return {
      labelPosition: 'left'
    }
  }
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
    background: rgba(0,0,0,0.3);
  }
  .login_warpper{
    width: 70%;
    height: 70vh;
    top: 15vh;
    left: 15%;
    background-color: rgba(233,233,233,0.3);
    position: absolute;
    z-index: 3;
    display: flex;
    justify-content: center;
    .login_left{
      width: 35%;
      height: 95%;
      margin: 1% 0;
      .login_left_top{
        height: 35%;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
          height: 65%;
          border-radius: 50%;
        }
        .top_shu{
          margin-top: 1px;
          height: 34%;
          width: 3px;
          background-color: #fff;
        }
        .top_heng{
          height: 1.5%;
          width: 80%;
          background-color: #fff;
        }
      }
      .login_left_middle{
        height: 40%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        .middle_title{
          color: #fff;
          text-align: center;
          font-size: 36px;
          letter-spacing: 10px;
        }
        .middle_desc{
          margin-top: 15px;
          color: #fff;
          font-size: 20px;
        }
      }
      .login_left_bottom{
        height: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .bottom_heng{
          height: 1.5%;
          width: 80%;
          background-color: #fff;
        }
        .bottom_shu{
          height: 45%;
          width: 3px;
          background-color: #fff;
        }
        .bottom_desc{
          width: 70%;
          padding: 5px;
          border: 2px solid #fff;
          border-radius: 5px;
          height: 35%;
          font-size: 20px;
          color: #fff;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-content: center;
        }
      }
    }
    .login_right{
      border-left: 1px solid rgb(79, 201, 225);
      width: 55%;
      height: 100%;
      .title{
        margin-top: 25px;
        text-align: center;
        color:  #DB5A6C;
      }
      /deep/ .el-form{
        margin: 7%;
        width: 80%;
        margin-left: 10%;
        height: 60%;
        // background-color: red;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .el-form-item{
          height: 30%;
          width: 90%;
          // background-color: pink;
          display: flex;
          justify-content: center;
          align-items: center;
          .el-form-item__label{
            color: #1a507e;
            width: 20% !important;
            margin: 0%;
            padding: 0%;
            font-size: 20px;
          }
          .el-input{
            width: 120%;
            margin-left: -25%;
          }
        }
      }
    }
  }
}
</style>
