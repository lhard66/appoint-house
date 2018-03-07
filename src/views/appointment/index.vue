<template>
  <div class="main">
    <div class="item">
      <div class="item-content">
        <p><span class="title">租客电话：</span>18888888888</p>
        <p><span class="title">预约楼盘：</span>平阳景苑</p>
        <p><span class="title">预约意向：</span>整租·一居室·整套·30平·1500元/月</p>
        <p><span class="title">楼盘地址：</span>长风街平阳路口</p>
        <p><span class="title">预约看房时间：</span>2014年10月10日 10:00</p>
        <p><span class="title">提交时间：</span>2015年10月18日 12:00</p>
      </div>
      <div class="item-operator">
        <a href="javascript:void(0);">待处理</a>
      </div>
    </div>
    <div class="item">
      <div class="item-content">
        <p><span class="title">租客电话：</span>18888888888</p>
        <p><span class="title">预约楼盘：</span>平阳景苑</p>
        <p><span class="title">预约意向：</span>整租·一居室·整套·30平·1500元/月</p>
        <p><span class="title">楼盘地址：</span>长风街平阳路口</p>
        <p><span class="title">预约看房时间：</span>2014年10月10日 10:00</p>
        <p><span class="title">提交时间：</span>2015年10月18日 12:00</p>
      </div>
      <div class="item-operator">
        <p class="fail">预约失败</p>
      </div>
    </div>
    <div class="item">
      <div class="item-content">
        <p><span class="title">租客电话：</span>18888888888</p>
        <p><span class="title">预约楼盘：</span>平阳景苑</p>
        <p><span class="title">预约意向：</span>整租·一居室·整套·30平·1500元/月</p>
        <p><span class="title">楼盘地址：</span>长风街平阳路口</p>
        <p><span class="title">预约看房时间：</span>2014年10月10日 10:00</p>
        <p><span class="title">提交时间：</span>2015年10月18日 12:00</p>
      </div>
      <div class="item-operator">
        <div class="success">
          <p>预约成功</p>
          <p class="tips">可在嗨住帮APP中查看详情</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../style/font-scale.scss';
.main {
  height: 100%;
  background-color: #EFEFF4;
  .item {
    margin-bottom: 0.2667rem;
    .item-content {
      padding-top: 0.4rem;
      padding-left: 0.4rem;
      @include font-dpr(14px);
      line-height: 140%;
      color: #2C3236;
      background-color: #FFF;
      .title {
        color: #8998A0;
      }
    }
    .item-operator {
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-content: center;
      height: 1.52rem;
      background-color: #FFF;
      text-align: center;
      @include font-dpr(15px);
      a {
        display: inline-block;
        width: 3.3333rem;
        height: 0.72rem;
        border: 1px #FF8E20 solid;
        border-radius: 13px;
        color: #FF8E20;
        line-height: 0.72rem;
      }
      .fail {
        color: #8998A0;
      }
      .success {
        color: #27CB6E;
        p {
          line-height: normal;
        }
        .tips {
          @include font-dpr(14px);
          color: #B8C1C8;
        }
      }
    }
  }
}
</style>