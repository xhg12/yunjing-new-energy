<template>
  <div class="user">
    <!-- 头部用户信息 -->
    <div class="headerCell">
      <img src="../../assets/images/login.png" alt="" class="avatar" />
      <div class="post">
        <span id="pd">188****8888</span>
        <p id="zw">团队长：普通团队长</p>
      </div>
     <div class="btn">
       <i class="iconfont icon-chongzhi"></i>
       <p>签到返现</p>
     </div>

      <!-- <van-cell
        :border="false"
        center
        title="188****8888"
        label="团队长：普通团队长"
      >
        <template #icon>
          <img src="../../assets/images/login.png" alt="" class="avatar" />
        </template>
        <template #default>
          <div>
            <van-button block icon="sign" color="#f16226">签到返现</van-button>
          </div>
        </template>
      </van-cell> -->
    </div>

    <!-- 资产信息区域 -->
    <div class="mony">
      <!-- 总资产 -->
      <div class="monyTotal">
        <p>总资产(元)</p>
        <p>53437.52</p>
      </div>
      <!-- 提现余额利息 -->
      <div class="monyMount">
        <div>
          <p>可提余额</p>
          <p>53437.52</p>
        </div>
        <div>
          <p>累计利息</p>
          <p>1224</p>
        </div>
        <div>
          <p>累计投资</p>
          <p>15200</p>
        </div>
      </div>
      <!-- 充值提现转账 -->
      <div class="rechargeMony">
        <div>
          <i class="iconfont icon-chongzhi"></i>
          <p>充值</p>
        </div>
        <div>
          <i class="iconfont icon-chongzhi"></i>
          <p>提现</p>
        </div>
        <div>
          <i class="iconfont icon-chongzhi"></i>
          <p>转账</p>
        </div>
      </div>
    </div>

    <!-- 会员、账单详情、收款方式、资金明细 -->
    <div class="card">
      <div>
        <i class="iconfont icon-chongzhi"></i>
        <p>我的会员</p>
      </div>
      <div>
        <i class="iconfont icon-chongzhi"></i>
        <p>账户详情</p>
      </div>
      <div>
        <i class="iconfont icon-chongzhi"></i>
        <p>收款方式</p>
      </div>
      <div>
        <i class="iconfont icon-chongzhi"></i>
        <p>资金明细</p>
      </div>
    </div>

    <!-- 功能区域 -->
    <div class="content">
      <van-cell center is-link to="index" border="false">
        <template #title>
          <i class="iconfont icon-chongzhi"></i>
          <span class="custom-title">聊天室</span>
        </template>
      </van-cell>
      <van-cell center is-link to="index">
        <template #title>
          <i class="iconfont icon-chongzhi"></i>
          <span class="custom-title">积分商城</span>
        </template>
      </van-cell>
      <van-cell center is-link to="index">
        <template #title>
          <i class="iconfont icon-chongzhi"></i>
          <span class="custom-title">商城订单</span>
        </template>
      </van-cell>
      <van-cell center is-link to="index">
        <template #title>
          <i class="iconfont icon-chongzhi"></i>
          <span class="custom-title">我的团队</span>
        </template>
      </van-cell>
      <van-cell center is-link to="index">
        <template #title>
          <i class="iconfont icon-chongzhi"></i>
          <span class="custom-title">我的卡券</span>
        </template>
      </van-cell>
      <van-cell center is-link to="index">
        <template #title>
          <i class="iconfont icon-chongzhi"></i>
          <span class="custom-title">充值记录</span>
        </template>
      </van-cell>
      <van-cell center is-link to="index">
        <template #title>
          <i class="iconfont icon-chongzhi"></i>
          <span class="custom-title">我的投资</span>
        </template>
      </van-cell>
      <van-cell center is-link to="index">
        <template #title>
          <i class="iconfont icon-chongzhi"></i>
          <span class="custom-title">个人设置</span>
        </template>
      </van-cell>
      <van-cell center to="index" style="color: red">
        <template #title>
          <i class="iconfont icon-chongzhi"></i>
          <span class="custom-title">退出登录</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myUser',
  data () {
    return {}
  },
  components: {},
  methods: {
    onClickLeft () {},
    onClickRight () {}
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.user {
  background-color: #f7f9fa;
}

.headerCell {
  background-color: #f7f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  font-size: 20px;
  .post{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: -70px;
    #pd{
      font-size: 18px;
      padding-bottom: 5px;
    }
    #zw{
      font-size: 12px;
      color: #9e9e9e;
    }
  }
  .btn {
    display: flex;
    font-size: 16px;
    justify-content: flex-start;
    align-items: center;
    border-radius:14px 0 0 14px;
    background-color: orange;
    width: 90px;
    height: 28px;
    padding-left: 10px;
    background-image: linear-gradient(to right, #f15f25 , #fbac39);
    .iconfont{
      font-size: 14px;
      color: #fff;
      opacity: 0.9;
      padding-left: 4px;
    }
    p{
      font-size: 12px;
      padding-left: 8px;
      // padding-right: 6px;
      color: #fff;
      opacity: 0.9;
    }
  }
  // border-image: linear-gradient(to left,#fbac39,#f15f25);
}

.van-cell {
  padding: 5px 0;
  font-size: 20px;
  // margin-top: 20px;
  // margin-left: 15px;
  // background-color: #fff;
  overflow: hidden;
  div {
    border-radius: 23px 0 0 23px;
  }
}

.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  // margin-right: 5px;
  border: none;
  margin-left: 22px;
}

.mony {
  background-color: #ffd155;
  width: 330px;
  margin-left: 22px;
  margin-top: -20px;
  /* display: flex; */
  /* align-content: center; */
  /* justify-content: center; */
  height: 190px;
  // position: absolute;
  // transform: translate(10px, 10px);
  border-radius: 12px;
  .monyTotal {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 20px 20px 20px;
    padding-top: 10px;
    p:nth-child(1) {
      font-size: 14px;
      color: #666666;
    }
    p:nth-child(2) {
      font-size: 24px;
      font-weight: bold;
    }
  }
  .rechargeMony {
    display: flex;
    justify-content: space-around;
    background-color: #ffc400;
    border-radius: 0 0 12px 12px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .iconfont {
        font-size: 23px;
        margin-bottom: 5px;
      }
      p:nth-child(2) {
        font-size: 12px;
      }
    }
  }
  .monyMount {
    display: flex;
    justify-content: space-around;
    margin-left: -3px;
    margin-bottom: 20px;
    div {
      p:nth-child(1) {
        font-size: 14px;
        margin-bottom: 5px;
        color: #666666;
      }
      p:nth-child(2) {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  // .rechargeMony{
  //   display: flex;
  //   justify-content: space-around;
  // }
}

.card {
  display: flex;
  width: 330px;
  height: 100px;
  background-color: #fff;
  box-shadow: 0 1px 1px #eee;
  justify-content: space-around;
  align-items: center;
  margin-left: 22px;
  border: 1px solid #ebeef5;
  margin-top: 20px;
  border-radius: 12px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    .iconfont {
      font-size: 30px;
    }
    p {
      font-size: 14px;
    }
  }
}

.content {
  width: 330px;
  margin-top: 20px;
  margin-left: 22px;
  box-shadow: 0 1px 1px #eee;
  border: 1px solid #ebeef5;
  border-radius: 14px;
  .van-cell:nth-child(1){
    border-radius: 14px 14px 0 0;
  }
  .van-cell:last-child{
    border-radius:0 0 14px 14px;
  }
  .van-cell {
    padding-top: 16px;
    .iconfont {
      margin-left: 15px;
      margin-right: 8px;
    }
    i {
      margin-right: 10px;
    }
    span {
      font-size: 14px;
      padding-left: 5px;
    }
  }
  /deep/.van-cell::after{
    display: none;
  }
}
</style>
