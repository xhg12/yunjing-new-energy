<template>
  <div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div>
      <van-tabbar v-model="active" route>
        <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="apps-o">项目产品</van-tabbar-item>
        <van-tabbar-item to="/onlineService" icon="service-o">在线客服</van-tabbar-item>
        <van-tabbar-item to="/about" icon="info-o">关于我们</van-tabbar-item>
        <van-tabbar-item to="/user" icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layoutPage',
  data () {
    return {
      active: 0
    }
  },
  components: {}
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.container {
  background-color: #f7f9fa;
  padding-bottom: 65px;
}
</style>
