<template>
  <div class="mh-group lazy-load">
    <div class="mh-group-title image-ready">
      <img class="mh-title-img" src="../../../../static/images/icon/icon-like.png" alt="" />
      <span class="mh-title">猜你喜欢</span>
    </div>
    <ul class="mh-like-list">
      <li class="mh-like-item mh-border-bottom" v-for="(item,index) in guessLikeInfo" :key="item.id">
        <router-link to="/list" class="mh-fulllink">
          <div class="mh-like-imgcon image-ready">
            <img class="mh-like-img" :src="item.urlImg" alt="金海湖风景区" />
          </div>
          <div class="mh-like-tag">{{item.tip}}</div>
          <div class="mh-like-info">
            <div class="mh-like-title mh-ellipsis">{{item.urlName}}</div>
            <div class="mh-like-comment">
              <span class="mpf-starlevel">
                <strong class="mpg-iconfont mpf-starlevel-gain iconfont icon-wuxing" mh-role="starWidth"></strong>
                <span class="mpg-iconfont mpf-starlevel-total iconfont icon-wuxing"></span>
              </span>
              <span class="mh-comment-num">{{item.number}}条评论</span>
            </div>
            <div class="mh-like-price">
              <span class="mpg-price">¥<em class="mpg-price-num">{{item.price}}</em></span>起<span class="mh-like-address">{{item.city}}</span>
            </div>
            <div class="mh-like-feature"><div class="mh-ellipsis2">{{item.feature}}</div></div>
          </div>
        </router-link>
      </li>
    </ul>
    <a class="mh-like-more mh-border-top" href="//touch.piao.qunar.com/touch/list_北京_景点门票.html">查看所有产品</a>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: mapState({
    guessLikeInfo(state) {
      // return this.$store.state.home.guessLikeInfo;
      return state.home.guessLikeInfo;
    }
  })
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
  .mh-like-list {
    margin-left: .24rem;
  }
  .mh-like-item {
    position: relative;
    overflow: hidden;
    padding: .2rem 0;
    border-bottom: 1px solid #e0e0e0;
  }
  .mh-fulllink {
    display: block;
    width: 100%;
    height: 100%;
  }
  .mh-like-imgcon {
    float: left;
    overflow: hidden;
    width: 2rem;
    height: 2rem;
    background: #f0f5f8;
  }
  .mh-like-img {
    width: 100%;
  }
  .mh-like-tag {
    position: absolute;
    top: .2rem;
    left: 0;
    width: 1.02rem;
    height: .38rem;
    background-size: 100%;
    color: #fff;
    font-size: .2rem;
    line-height: .38rem;
    text-indent: .04rem;
    background-image: url(../../../../static/images/icon/icon-bg.png);
  }
  .mh-like-info {
    overflow: hidden;
    padding-left: .22rem;
  }
  .mh-like-title {
    margin-top: .26rem;
    height: .44rem;
    color: #212121;
    font-size: .32rem;
    line-height: .44rem;
  }
  .mh-ellipsis {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .mh-like-comment {
    margin-top: .14rem;
    height: .34rem;
  }
  .mpf-starlevel {
    display: inline-block;
    position: relative;
    width: 1.5rem;
    height: .28rem;
    line-height: .28rem;
    font-size: .28rem;
    letter-spacing: .02rem;
    -webkit-transform: scale(.83);
    -moz-transform: scale(.83);
    -ms-transform: scale(.83);
    -o-transform: scale(.83);
    transform: scale(.83);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  .mpf-starlevel-gain {
    z-index: 2;
    color: #ffb436;
  }
  .mpf-starlevel-gain, .mpf-starlevel-total {
    overflow: hidden;
    position: absolute;
    top: .04rem;
    left: 0;
    height: .28rem;
  }
  .mpg-iconfont {
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
  .mpf-starlevel-total {
    z-index: 1;
    color: #e0e0e0;
  }
  .mpf-starlevel-gain, .mpf-starlevel-total {
    overflow: hidden;
    position: absolute;
    top: .04rem;
    left: 0;
    height: .28rem;
    font-size: .28rem;
  }
  .mh-comment-num {
    color: #616161;
    font-size: .24rem;
    line-height: .34rem;
    vertical-align: text-bottom;
  }
  .mh-like-price {
    position: relative;
    margin-top: .22rem;
    color: #616161;
    font-size: .24rem;
    line-height: .4rem;
  }
  .mh-like-price .mpg-price {
    color: #ff8300;
  }
  .mh-like-price {
    position: relative;
    margin-top: .22rem;
    color: #616161;
    font-size: .24rem;
    line-height: .4rem;
  }
  .mh-like-price .mpg-price-num {
    font-size: .4rem;
  }
  .mh-like-address {
    position: absolute;
    right: .24rem;
    bottom: 0;
  }
  .mh-like-feature {
    display: inline-block;
    margin-top: .48rem;
    margin-right: .24rem;
    background: #fff9f9;
    padding: .04rem .1rem;
    color: #f55;
    font-size: .24rem;
    line-height: .34rem;
  }
  .mh-ellipsis2 {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .mh-like-more {
    display: block;
    color: rgb(0, 175, 199);
    font-size: 0.28rem;
    line-height: 0.4rem;
    text-align: center;
    padding: 0.2rem 0px;
  }
</style>
