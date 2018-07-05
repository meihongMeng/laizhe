<template>
  <div class="listItem">
    <ul class="mh-listitem-con mh-border-top">
      <li class="mh-listentrance-item mh-border-right">
        <span class="iconfont icon-04"></span>
        定位失败
      </li>
      <li class="mh-listentrance-item">
        <span class="iconfont icon-shijie"></span>
        玩水季
      </li>
    </ul>
    <ul class="mh-activity-con mh-border-topbottom">
      <li class="mh-activity-item mh-back-imgLeft mh-border-right" >
        <a href="javascript:void(0);" class="mh-fulllink">
          <span class="mh-piao-sell">门票特卖</span>
          <span class="mh-piao-desc">天天好价1折起</span>
        </a>
      </li>
      <li class="mh-activity-item mh-back-imgRgiht">
        <a href="javascript:void(0);" class="mh-fulllink">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .mh-border-top {
    border-top: 1px solid #e0e0e0;
  }
  .mh-listitem-con {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: box;
    width: 100%;
    background-color: #fff;
  }
  .mh-listitem-con .mh-listentrance-item {
    overflow: hidden;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flexbox-flex: 1;
    box-flex: 1;
    width: 0;
    height: .98rem;
    font-size: .28rem;
    color: #212121;
    line-height: .98rem;
    text-align: center;
  }
  .mh-listitem-con .mh-border-right {
    border-right: 1px solid #e0e0e0;
  }
  .mh-listitem-con .mh-listentrance-item .iconfont {
    font-family: 'mpiconfont';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .mh-listitem-con .mh-listentrance-item span {
    margin-right: .05rem;
    color: #616161;
    font-size: .32rem;
  }
  .mh-activity-con {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: box;
    width: 100%;
    margin-top: .2rem;
    background-color: #fff;
  } 
  .mh-activity-con .mh-activity-item {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flexbox-flex: 1;
    box-flex: 1;
    position: relative;
    width: 0;
    height: 1.4rem;
    line-height: 1.4rem;
    color: #212121;
    font-size: .28rem;
  }
  .mh-activity-con .mh-activity-item .mh-fulllink {
    line-height: 0;
    display: block;
    padding-left: 0.2rem;
  } 
  .mh-activity-con .mh-activity-item .mh-fulllink .mh-piao-sell {
    line-height: 1rem;
    display: block;
    font-size: 0.34rem;
    color: #ff2d2d;
  }
  .mh-activity-con .mh-activity-item .mh-fulllink .mh-piao-desc {
    display: block;
    font-size: 0.14rem;
    color: #88888d;
  }
  .mh-activity-con .mh-border-right {
    border-right: 1px solid #e0e0e0;
  }
  .mh-activity-con .mh-back-imgLeft {
    background: url(../../../../static/images/home/icon-piao.png) no-repeat 95px 0px;
    background-size: auto 100%;
  }
</style>
