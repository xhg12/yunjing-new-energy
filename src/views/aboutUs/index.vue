<template>
  <div class="about">
    <h1>关于我们</h1>
    <div class="content">
      <van-cell center is-link to="index">
        <template #title>
          <i class="iconfont icon-gongsi"></i>
          <span class="custom-title">公司简介</span>
        </template>
      </van-cell>
      <van-cell center is-link to="index">
        <template #title>
          <i class="iconfont icon-gonggao1"></i>
          <span class="custom-title">公司公告</span>
        </template>
      </van-cell>
      <van-cell center is-link to="index">
        <template #title>
          <i class="iconfont icon-chongzhi"></i>
          <span class="custom-title">充值提现</span>
        </template>
      </van-cell>
      <van-cell center is-link to="index">
        <template #title>
          <i class="iconfont icon-Rackjiazi"></i>
          <span class="custom-title">积分说明</span>
        </template>
      </van-cell>
      <van-cell center is-link to="index">
        <template #title>
          <i class="iconfont icon-wentijilu"></i>
          <span class="custom-title">常见问题</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutUs',
  data () {
    return {}
  },
  components: {}
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.about {
  padding-bottom: 100%;
  h1{
    text-align: center;
    padding-top: 30px;
  }
  .content {
    width: 330px;
    margin-top: 20px;
    margin-left: 22px;
    box-shadow: 0 1px 1px #eee;
    border: 1px solid #ebeef5;
    border-radius: 14px;
    .van-cell:nth-child(1) {
      border-radius: 14px 14px 0 0;
    }
    .van-cell:last-child {
      border-radius: 0 0 14px 14px;
    }
    .van-cell {
      padding-top: 16px;
      padding-bottom: 20px;
      .iconfont {
        margin-left: 15px;
        margin-right: 8px;
      }
      i {
        font-size: 16px;
      }
      span {
        font-size: 14px;
        padding-left: 5px;
        font-weight: bold;
      }
    }
    /deep/.van-cell::after {
      border-bottom: 2px solid #eee;
    }
  }
}
</style>
