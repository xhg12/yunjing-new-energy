<template>
  <div class=".content">
    <!-- <div>
      <div class="header">
        <div class="outer">
          <div class="img">
            <img src="../../assets/images/login.png" alt="login" />
          </div>
          <div class="fontSizeStyle">
            <span class="title1">云晶新能源</span>
            <span class="title2">Yunjing new energy</span>
          </div>
        </div>
      </div>
      <h4 class="login">账号登陆</h4>
    </div> -->
    <div class="headerOut">
      <img src="../../assets/images/login.png" alt="" />

      <div class="fontStyle">
        <span>云晶新能源</span>
        <span>Yunjing new energy</span>
      </div>
    </div>
    <h4>账号登录</h4>

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="账号"
        placeholder="请输入您的账号"
        left-icon="contact"
        :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        left-icon="lock"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="bntTopDiv">
        <span>忘记密码</span>
        <van-button block color="#386766" native-type="submit">登录</van-button>
        <p @click="toRegister">新用户注册</p>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'userLogin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 点击按钮，登录
    onSubmit (values) {
      console.log('submit', values)
    },
    // 点击按钮，注册用户
    toRegister () {
      this.$router.push('/register')
    }
  },
  components: {}
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.headerOut {
  display: flex;
  align-items: center;
  margin-top: 60px;
  font-weight: 600;
  img {
    width: 100px;
    height: 100px;
    margin-right: -14px;
  }
  .fontStyle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    // line-height: 20px;
  }
  .fontStyle > span:nth-child(1) {
    letter-spacing: 3px;
  }
  .fontStyle > span:nth-child(2) {
    font-size: 14px;
  }
}
h4 {
  margin-bottom: 60px;
  margin-left: 21px;
}
/deep/.van-field__control {
  text-indent: 5px;
  border-bottom: 1px;
}
/deep/.van-cell {
  width: 90%;
  text-align: center;
  margin-left: 20px;
  border-bottom: 1px solid #eee;
  margin-top: 25px;
}
/deep/.van-button--block {
  border-radius: 10px;
}
/deep/.van-form div {
  // margin-bottom: 10px;
  // margin-top: 8px;
  .van-button--block {
    height: 50px;
  }
  span {
    float: right;
    font-size: 12px;
    margin-bottom: 20px;
  }
  .van-button {
    .van-button__content {
      justify-content: center;
      align-items: center;
      .van-button__text {
        padding-top: 20px;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
  p {
    border: none;
    background-color: #fff;
    width: 100%;
    text-align: center;
    font-size: 14px;
    margin-top: 15px;
    font-weight: bold;
  }
}
.bntTopDiv {
  margin: 10px 16px;
}

// .content {
// }
// .header {
//   // display: flex;
//   margin-top: 2rem;
//   margin-bottom: 0.3333333rem;
//   margin-left: 0.3333333rem;
// }
// .outer{
//   display: flex;
//   align-items: center;
//     justify-content: flex-start;
// }
// .outer img{
//   width: 2.7rem;
//   height: 2.7rem;
// }
// .fontSizeStyle{
//       margin-left: -14px;
//   font-weight: 600;
// }

// .login {
//   // margin-left: 0.3333333rem;
//   // margin-top: 0.6rem;
//   margin-top: -28px;
//   margin-bottom: 1.3rem;
// }
// .title1 {
//   display: block;
//   letter-spacing: 3px;
//   margin-bottom: -10px;
// }
// .title2 {
//   width: 3.8em;
//   font-size: 12px;
//     letter-spacing: 1px;
// }
</style>
