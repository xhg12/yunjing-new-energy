<template>
  <div class="home">
    <!-- 头部1 -->
    <div class="headerOut">
      <img src="../../assets/images/login.png" alt="" />
      <div class="fontStyle">
        <span>云晶新能源</span>
        <span>Yunjing new energy</span>
      </div>
    </div>

    <!-- 轮播图2 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <!-- 会员等级3 -->
    <div class="Membership"><p>会员等级：VIP 1</p></div>

    <!-- 活动区域4 -->
    <div class="zoneAction">
      <div>
        <div>
          <i class="iconfont icon-chongzhi"></i>
          <span class="custom-title">每日签到</span>
        </div>
        <div>
          <i class="iconfont icon-chongzhi"></i>
          <span class="custom-title">幸运转盘</span>
        </div>
        <div>
          <i class="iconfont icon-chongzhi"></i>
          <span class="custom-title">邀请有奖</span>
        </div>
        <div>
          <i class="iconfont icon-chongzhi"></i>
          <span class="custom-title">活动公告</span>
        </div>
      </div>
      <div>
        <div>
          <i class="iconfont icon-chongzhi"></i>
          <span class="custom-title">我要充值</span>
        </div>
        <div>
          <i class="iconfont icon-chongzhi"></i>
          <span class="custom-title">我要提现</span>
        </div>
        <div>
          <i class="iconfont icon-chongzhi"></i>
          <span class="custom-title">团队奖励</span>
        </div>
        <div>
          <i class="iconfont icon-chongzhi"></i>
          <span class="custom-title">推荐奖励</span>
        </div>
      </div>
    </div>

    <!-- 公告5 -->
    <div class="Notice">
      <div class="rightNotice">
        <div>
          <span>公告</span>
          <span>通知</span>
        </div>
        <p>云晶新能源股份有限公司</p>
      </div>
      <div>
        <p>更多</p>
      </div>
    </div>

    <!-- 财富产品6 -->
    <div class="wealth">
      <span>财富产品</span>
      <div></div>
    </div>

    <!-- 风力储电项目 -->
    <div class="wind">
      <img src="../../assets/images/Snipaste_2022-04-25_16-40-19.png" alt="">
      <!-- 项目名称 -->
      <div class="windName">
        <i class="iconfont icon-chongzhi"></i>
        <span>560MW分散式风电储能项目</span>
      </div>
      <!-- 收益 -->
      <div class="profit">
        <div>
          <span>180<span>日</span></span>
          <span>投资期限</span>
        </div>
         <div>
          <span>1.83%</span>
          <span>投资期限</span>
        </div>
         <div>
          <span>234.2<span>元</span></span>
          <span>投资期限</span>
        </div>
         <div>
          <span>12800<span>元</span></span>
          <span>投资期限</span>
        </div>
      </div>
      <!-- 按天付 -->
      <div class="date">
        <div>
          <span>按天付收益，到期返本</span>
          <div>
          <van-progress :show-pivot="false" color="#386766" stroke-width="10px" :percentage="100" />
          <p>100.00%</p>
          </div>
        </div>
        <button>立即投资</button>
      </div>
    </div>

    <!-- 大型风光综合发电项目 -->
     <div class="wind">
      <img src="../../assets/images/Snipaste_2022-04-25_16-40-19.png" alt="">
      <!-- 项目名称 -->
      <div class="windName">
        <i class="iconfont icon-chongzhi"></i>
        <span>大型风光综合发电项目</span>
      </div>
      <!-- 收益 -->
      <div class="profit">
        <div>
          <span>365<span>日</span></span>
          <span>投资期限</span>
        </div>
         <div>
          <span>1.78%</span>
          <span>每日收益率</span>
        </div>
         <div>
          <span>2260.60<span>元</span></span>
          <span>日收益</span>
        </div>
         <div>
          <span>127000<span>元</span></span>
          <span>起购金额</span>
        </div>
      </div>
      <!-- 按天付 -->
      <div class="date">
        <div>
          <span>按天付收益，到期返本</span>
          <div>
          <van-progress :show-pivot="false" color="#386766" stroke-width="10px" :percentage="21" />
          <p>21.00%</p>
          </div>
        </div>
        <button id="towBtn">立即投资</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutHome',
  components: {}
}
</script>
<style lang="less" scoped>
.home{
  background-color: #f7f9fa;
}
.headerOut {
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-top: 10px;
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
    font-size: 13px;
  }
}

.my-swipe {
  width: 330px;
  margin-left: 22px;
  border-radius: 12px;
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
}

.Membership {
  margin-top: 20px;
  // margin-bottom: 20px;
  width: 140px;
  border-radius: 0 6px 6px 0;
  background-image: linear-gradient(to right, #f7f8f7, #ffdc2e);
  padding-top: 5px;
  padding-bottom: 5px;
  p {
    font-size: 14px;
    font-weight: bold;
    padding-left: 22px;
  }
}

.zoneAction {
  width: 100%;
  div {
    display: flex;
    // flex-direction: column;
    justify-content: space-evenly;
    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-top: 15px;
      .iconfont {
        font-size: 20px;
      }
      span {
        font-size: 14px;
        color: #24807d;
        opacity: 0.8;
        font-weight: bold;
      }
    }
  }
}

.Notice {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 1px #eee;
  margin: 20px 22px 0;
  border: 1px solid #ebeef5;
  border-radius: 12px;
  padding: 10px;
  .rightNotice {
    display: flex;
    font-size: 14px;
    justify-content: flex-start;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      span:first-child {
      color: #24807d;
      font-weight: bold;
      }
      span:last-child{
        color: #ffc400;
      }
    }
    p {
      border-left: 1px solid #eeeeee;
      margin-left: 8px;
      padding-left: 8px;
      color: #24807d;
      opacity: 0.8;
    }
  }
  div:last-child {
    font-size: 14px;
    // margin-right: 10px;
    color: #9c9c9c;
  }
}

.wealth{
  margin-top: 35px;
  span{
    font-size: 14px;
    float: left;
    margin-left: 22px;
    margin-top: -14px;
    letter-spacing: 1px;
    font-weight: bold;
  }
  div{
    border-radius: 0 2px 2px 0;
    margin-left: 22px;
    width: 65px;
    height: 10px;
    background-image:linear-gradient(to right,#f7f9fa,#386766);
  }
}

.wind{
  margin-bottom: 15px;
  width: 330px;
  margin-left: 22px;
  border: 1px solid #ebeef5;
  box-shadow: 0 1px 1px #eee;
  background-color: #fff;
  border-radius: 12px;
  img{
    border: none;
    width: 310px;
    height:150px;
    margin: 10px;
    border-radius: 12px;
  }
  .windName{
    margin-top: -15px;
    .iconfont{
      font-size: 14px;
      margin-left: 10px;
    }
    span{
      font-size: 16px;
      margin-left: 5px;
      font-weight: bold;
      opacity: .8;
    }
  }
  .profit{
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      margin-bottom: 10px;
      span:nth-child(1){
        color: #ffc400;
        font-size: 16px;
        font-weight: bold;
        span{
          font-size: 12px;
          font-weight: normal;
        }
        padding-bottom: 3px;
        padding-top: 10px;
      }
      span:nth-child(2){
        font-size: 12px;
        color: #a5a5a5;
      }
    }
  }
  .date{
    display: flex;
    justify-content: space-between;
    // align-items: center;
    margin-bottom: 15px;
    margin-left: 10px;
    div{
      display: flex;
      flex-direction: column;
      span{
        font-size: 14px;
        color: #a5a5a5;
        margin-bottom: 5px;
      }
      div{
        .van-progress{
          width: 160px;
        }
        p{
          float: right;
          margin-left: 165px;
          font-size: 12px;
          margin-top: -12px;
          color: #386766;
        }
      }
    }
    button{
      height: 35px;
      font-size: 16px;
      border: none;
      margin-right: 10px;
      border-radius: 5px;
      padding-left: 8px;
      padding-right: 8px;
    }
  }
}
// 第二个项目的按钮
#towBtn{
  background-color: #386766;
  color:#fff;
}
</style>
