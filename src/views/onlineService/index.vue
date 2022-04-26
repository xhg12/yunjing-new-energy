<template>
  <div class="container">
    <!-- 固定导航 -->
    <h1>在线客服</h1>

    <!-- 聊天主体区域 -->
    <div class="chat-list">
      <div>
        <!-- 时间 -->
        <p id="onlineTime">16:56</p>
        <!-- 左侧是机器人小思 -->
        <div class="chat-item left">
          <van-image
            fit="cover"
            round
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <div class="chat-pao online">
            您好，云晶新能源和高兴为您服务“低碳行动让你我地球更健康”，请问有什么可以帮到您的！
          </div>
        </div>

        <!-- 左侧是机器人小思 -->
        <div class="chat-item left">
          <van-image
            fit="cover"
            round
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <div class="chat-pao online">
            您好，云晶新能源和高兴为您服务“低碳行动让你我地球更健康”，请问有什么可以帮到您的！
          </div>
        </div>

        <!-- 右侧是当前用户 -->
        <div class="chat-item right">
          <div class="chat-pao customer">风力发电还有新的项目可以投吗？</div>
          <van-image
            fit="cover"
            round
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
      </div>
          <div>
        <!-- 时间 -->
        <p id="onlineTime">16:56</p>
        <!-- 左侧是机器人小思 -->
        <div class="chat-item left">
          <van-image
            fit="cover"
            round
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <div class="chat-pao online">
            您好，云晶新能源和高兴为您服务“低碳行动让你我地球更健康”，请问有什么可以帮到您的！
          </div>
        </div>

        <!-- 左侧是机器人小思 -->
        <div class="chat-item left">
          <van-image
            fit="cover"
            round
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <div class="chat-pao online">
            您好，云晶新能源和高兴为您服务“低碳行动让你我地球更健康”，请问有什么可以帮到您的！
          </div>
        </div>

        <!-- 右侧是当前用户 -->
        <div class="chat-item right">
          <div class="chat-pao customer">风力发电还有新的项目可以投吗？</div>
          <van-image
            fit="cover"
            round
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
      </div>
    </div>

    <!-- 对话区域 -->
    <div class="reply-container van-hairline--top">
      <van-field placeholder="请输入" :border="false">
        <template #button>
          <span>发送</span>
        </template>
      </van-field>
      <div class="borderBottom">
        <i class="iconfont icon-xiaolian"></i>
        <i class="iconfont icon-tupian"></i>
        <i class="iconfont icon-shipin"></i>
        <i class="iconfont icon-dianzan"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'onlineService'
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  background: #f7f9fa;
  padding-bottom:200px;
  h1 {
    text-align: center;
    font-size: 20px;
    opacity: 0.8;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .chat-list {
    height: 100%;
    overflow-y: scroll;
    .chat-item {
      padding: 10px;
      /deep/.van-image {
        vertical-align: top;
        width: 40px;
        height: 40px;
      }
      .online {
        background-color: #fff;
        width: 180px;
        max-width: 70%;
        min-height: 40px;
        border-radius: 0 16px 16px;
        font-size: 12px;
        color: #386766;
        padding-left: 14px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 20px;
        margin-left: 50px;
        margin-top: -20px;
      }
      .customer {
        // position: absolute;
        // right: 50px;
        background-color: #fff;
        width: 180px;
        max-width: 70%;
        min-height: 40px;
        line-height: 38px;
        border-radius: 20px 0 20px 20px;
        font-size: 12px;
        color: #fff;
        padding-left: 14px;
        // padding-top: 5px;
        // padding-bottom: 5px;
        padding-right: 20px;
        margin-right: 10px;
        margin-top: 20px;
        display: inline-block;
        background-color: #386766;
      }
    }
  }
}
.chat-item.right {
  text-align: right;
}
.chat-item.left {
  text-align: left;
}
.reply-container {
  position: fixed;
  left: 0;
  bottom: 84px;
  height: 44px;
  width: 100%;
  background: #f7f9fa;
  z-index: 9999;
  /deep/.van-field__value {
    padding-top: 3px;
  }
  /deep/.van-field {
    border-radius: 18px 18px 0 0;
    font-size: 12px;
    padding-top: 5px;
    .van-field__control {
      width: 280px;
      height: 30px;
      background-color: #eee;
      border-radius: 15px;
      padding-left: 10px;
    }
    span {
      display: inline-block;
      background-color: #386766;
      width: 60px;
      height: 28px;
      text-align: center;
      color: #fff;
      padding-top: 3px;
      border-radius: 15px;
    }
  }
  div {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    padding-top: 7px;
    padding-bottom: 6px;
    color: #386766;
    font-size: 20px;
  }
}
#onlineTime {
  text-align: center;
  font-size: 12px;
  padding-top: 10px;
  margin-bottom: 10px;
  color: #acacac;
}
.borderBottom {
  border-bottom: 2px solid #eee;
}
</style>
