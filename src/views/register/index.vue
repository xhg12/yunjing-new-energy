<template>
  <div class=".content">
    <div class="headerOut">
      <img src="../../assets/images/login.png" alt="" />

      <div class="fontStyle">
        <span>云晶新能源</span>
        <span>Yunjing new energy</span>
      </div>
    </div>
    <h4>新用户注册</h4>

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="手机号"
        placeholder="请输入手机号"
        left-icon="manager"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        left-icon="lock"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
        <van-field
        v-model="password"
        type="password"
        name="确认密码"
        placeholder="确认密码"
        left-icon="lock"
        :rules="[{ required: true, message: '请填写确认密码' }]"
      />
        <van-field
        v-model="password"
        type="password"
        name="邀请码"
        placeholder="请输入您的邀请码"
        left-icon="envelop-o"
        :rules="[{ required: true, message: '请填写您的邀请码' }]"
      />
        <van-field
        v-model="password"
        type="password"
        name="验证码"
        placeholder="验证码"
        left-icon="lock"
        :rules="[{ required: true, message: '请输入验证码' }]"
      />
      <div class="bntTopDiv">
        <van-button block color="#386766" native-type="submit">立即注册</van-button>
        <p @click="toLogin">有账号？去登录</p>
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
    onSubmit (values) {
      console.log('submit', values)
    },
    toLogin () {
      this.$router.push('/login')
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
  // span {
  //   float: right;
  //   font-size: 12px;
  //   margin-bottom: 20px;
  // }
  .van-button {
    .van-button__content {
      justify-content: center;
      align-items: center;
      .van-button__text {
        // padding-top: 20px;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
  p{
    border: none;
    background-color: #fff;
    width: 100%;
    text-align: center;
    font-size: 14px;
    margin-top: 15px;
    font-weight: bold;
  }
}
.bntTopDiv{
  margin: 40px 16px;
}
</style>
