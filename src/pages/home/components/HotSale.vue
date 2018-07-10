<template>
  <div class="mh-group lazy-load">
    <div class="mh-group-title image-ready">
      <img class="mh-title-img" src="../../../../static/images/icon/icon-hot.png" alt="">
      <span class="mh-title">本周热门榜单</span>
      <a href="javascript:void(0);" class="mh-title-more">
        全部榜单
        <span class="iconfont icon-gengduo"></span>
      </a>
    </div>
    <ul class="mh-hotsale-list">
      <li class="mh-hotsale-item" v-for="(item,index) in hotListInfo" :key="item.id">
        <a class="mh-fulllink" href="javascript:void(0);">
          <div class="mh-hotsale-tag image-ready">
            <img class="mh-hotsale-tagimg" :src="item.tipImg">
          </div>
          <div class="mh-hotsale-imgcon image-ready">
            <img :src="item.urlImg" alt="故宫">
          </div>
          <div class="mh-hotsale-sight mh-ellipsis">{{item.name}}</div>
          <div class="mh-hotsale-price">
            <span class="mhg-price">¥<em class="mhg-price-num">{{item.price}}</em></span>
            起
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["hotListInfo"]
}
</script>

<style scoped>
  .mh-group {
    margin-top: 0.2rem;
    background: #fff;
  }
  .mh-group-title {
    position: relative;
    padding: .24rem 0 .26rem;
  }
  .mh-group-title .mh-title-img {
    display: inline-block;
    overflow: hidden;
    width: .3rem;
    height: .3rem;
    margin-left: .2rem;
    vertical-align: top;
  }
  .mh-group-title .mh-title {
    display: inline-block;
    margin-left: .08rem;
    height: .44rem;
    color: #212121;
    font-size: .32rem;
    line-height: .44rem;
  }
  .mh-group-title .mh-title-more {
    position: absolute;
    top: .36rem;
    right: .32rem;
    color: #616161;
    font-size: .24rem;
    line-height: .28rem;
  }
  .mh-hotsale-list {
    padding: 0 .24rem;
    overflow-x: scroll;
    white-space: nowrap;
  }
  .mh-hotsale-list .mh-hotsale-item {
    position: relative;
    display: inline-block;
    padding: .06rem 0 .2rem;
    width: 2rem;
  }
  .mh-hotsale-list .mh-hotsale-item .mh-fulllink {
    display: block;
    width: 100%;
    height: 100%;
  }
  .mh-hotsale-tag {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
    width: .84rem;
    height: .4rem;
  }
  .mh-hotsale-tagimg {
    width: 100%;
  }
  .mh-hotsale-imgcon {
    overflow: hidden;
    width: 2rem;
    height: 0;
    padding-bottom: 100%;
    background: #f0f5f8;
  }
  .mh-hotsale-imgcon img {
    width: 100%;
  }
  .mh-hotsale-sight {
    margin-top: .12rem;
    color: #212121;
    font-size: .24rem;
    line-height: .32rem;
    text-align: center;
  }
  .mh-ellipsis {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .mh-hotsale-price {
    color: #616161;
    font-size: .24rem;
    line-height: .36rem;
    text-align: center;
  }
  .mh-hotsale-price .mhg-price {
    color: #ff8300;
  }
  .mh-hotsale-price .mhg-price-num {
    font-size: .28rem;
  }
  .mh-hotsale-item:not(:first-child) {
    margin-left: .12rem;
  }
</style>
