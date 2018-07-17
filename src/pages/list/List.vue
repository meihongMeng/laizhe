<template>
  <div class="mh-page">
    <!-- <div>{{title}} {{name}}</div> -->
    <!-- <div class="mh-listpage">公共的头部</div> -->
    <!-- {{id}} -->
    <!-- <router-view></router-view> -->
    <div class="mh-header">
      <a class="mh-header-left mh-iconfont iconfont icon-fanhui" @click = "handleBackClick"></a>
      <div class="mh-header-title">
        <!-- <input type="text" id="search-input-bind" placeholder="上海迪士尼5折起" class="mh-search-input" v-model="handleGetInput" @keyup="handleKeySearch"> -->
        <input type="text" id="search-input-bind" placeholder="上海迪士尼5折起" class="mh-search-input" @focus="handleShowCon" v-model='inputText' @keyup='handleKeySearch($event)' @keydown.down='handleKeydown()' @keydown.up.prevent='handleKeyup()'>
        <a class="mh-search-delete" id="search-form-delete" v-show="isShowDel" @click = "handleClickDel"></a>
        <input type="hidden" name="from" value="ts_search">
      </div>
      <span class="mh-header-right">
        <a href="javascript:void(0);" class="mh-search-submit" id="mh-form-submit">搜索</a>
      </span>
    </div>
    <!-- 搜索结果 -->
    <div v-show="isShowList" class="suggest">
      <div class="mh-suggest-header">
        <div class="mh-suggest-title">搜索建议</div>	
        <a class="mh-suggest-close" @click="handleSuggestClose">关闭</a>
      </div>
      <div class="mh-suggest-list">
        <div class="mh-suggest-item" v-for="(item, index) in result" :class='{bg: index==nowIndex}' @click="handleClickItem(index)" ref="menuItem">
          <div class="mh-suggest-item-content">
            <img class="mh-suggest-item-imgcon" src="../../../static/images/icon/icon-search.png">
            {{item}}
          </div>
        </div>
      </div>
    </div>
    <!-- 热门搜索 -->
    <div id="blank-suggest" class="suggest" v-show="isShowCon">
      <div class="hotlist">
        <div class="mh-hotsearch-head">
          <span class="mh-hotsearch-title">热门搜索</span>
          <span class="mh-hotsearch-refreshoption">
            <span class="text-icon mh-hotsearch-refreshicon iconfont icon-shuaxin"></span>
            <span class="mh-hotsearch-refreshtext">换一批</span>
          </span>
        </div>
        <div class="mh-hotsearch-con">
          <div class="mh-hotsearch-group">
            <div class="mh-hotsearch-typecon">
              <div class="mh-hotsearch-typeinner">
                <img src="../../../static/images/icon/icon-s1.png" class="mh-hotsearch-typeicon" alt="">
              </div>
            </div>
            <div class="mh-hotsearch-itemcon mh-sight-maxline">
              <div class="mh-hotsearch-iteminner">
                <a href="javascript:void(0);" class="mh-hotsearch-item">走进门头沟</a>
                <a href="javascript:void(0);" class="mh-hotsearch-item" style="color: #1ba9ba;">上海迪士尼5折</a>
                <a href="javascript:void(0);" class="mh-hotsearch-item">北京刘老根大舞台</a>
                <a href="javascript:void(0);" class="mh-hotsearch-item">1元秒玩水</a>
                <a href="javascript:void(0);" class="mh-hotsearch-item" style="color: #1ba9ba;">门票特卖</a>
                <a href="javascript:void(0);" class="mh-hotsearch-item">颐和园</a>
              </div>
            </div>
          </div>
          <div class="mh-hotsearch-group">
             <div class="mh-hotsearch-typecon">
              <div class="mh-hotsearch-typeinner">
                <img src="../../../static/images/icon/icon-s2.png" class="mh-hotsearch-typeicon" alt="">
              </div>
            </div>
            <div class="mh-hotsearch-itemcon mh-sight-maxline">
              <div class="mh-hotsearch-iteminner">
                <a href="javascript:void(0);" class="mh-hotsearch-cityitem">怀柔区</a>
                <a href="javascript:void(0);" class="mh-hotsearch-cityitem">天津</a>
                <a href="javascript:void(0);" class="mh-hotsearch-cityitem">房山区</a>
                <a href="javascript:void(0);" class="mh-hotsearch-cityitem">秦皇岛</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mh-search-nearbycon" @click="handleClickNearby">
        <div class="mh-search-nearbybtn">搜索身边的景点</div>
      </div>
    </div>

    <div class="mh-location" style="margin-left: -85px;" v-show="isShowNetwork">
      <div class="mh-location-inner">
        无法获取您的当前位置<br>
        请检查网络是否畅通
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // props: ['id']
    /*
  data() {
    return {
      title: "",
      name: ""
    }
  },

  mounted() {
    //获取到list后面的参数
    // console.log(this.$route.params);
    const {name, id} = this.$route.params;
    // this.name = name;
    
    if(id == 1) {
      //请求第一页数据
      this.title = "第一页"
    }
    if(id == 2) {
      //请求第二页数据
      this.title = "第二页"
    }
  },
  //监听路由变化，在url输入可直接更改页面，不建议使用
  // watch: {
  //   '$route'(to, from) {
  //     console.log(to);
  //     console.log(from);
  //     this.name = to.params.name;
  //   }
  // },

  //代替watch，建议使用
  beforeRouteUpdate(to, form, next) {
    this.name = to.params.name;
    next(); //执行之后才能继续走到下一个钩子函数
  }
  */
  data() {
    return {
      inputText: '',
      text: '',
      nowIndex: -1,
      result: [],
      isShowDel: false,
      isShowCon: true,
      isShowList: false,
      isShowNetwork: false
    }
  },
  methods: {
    handleBackClick() {
      this.$router.go(-1);
    },
    handleKeySearch(ev) {
      // this.isShow = !this.isShow;
      this.isShowDel = true;
      this.isShowCon = false;
      // this.isShowList = true;
      if(this.inputText == '') {
        this.isShowCon = true;
        this.isShowDel = false;
        this.isShowList = false
      } 
      if (ev.keyCode == 38 || ev.keyCode == 40) {
        if (this.nowIndex < -1){
          return;
        }
        if (this.nowIndex != this.result.length && this.nowIndex != -1) {
          this.inputText = this.result[this.nowIndex];
        }
        return;
      }
      if (ev.keyCode == 13) {
        window.open('https://www.baidu.com/s?wd=' + this.inputText, '_blank');
        this.inputText = '';
      }
      this.text = this.inputText;
      this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su', {
        params: {
          wd: this.inputText
        },
        jsonp: 'cb'
      }).then(res => {
        this.result = res.data.s;
      })
    },
    handleKeydown() {
      this.nowIndex++;
      if (this.nowIndex == this.result.length) {
        this.nowIndex = -1;
        this.inputText = this.text;
      }
    },
    handleKeyup() {
      this.nowIndex--;
      if (this.nowIndex < -1){
        this.nowIndex = -1;
        return;
      }
      if (this.nowIndex == -1) {
        this.nowIndex = this.result.length;
        this.inputText = this.text;
      }
    },
    //点击删除输入值
    handleClickDel() {
      this.isShowDel = false;
      this.isShowCon = false;
      this.isShowList = false;
      this.inputText = '';
    },
    //input获取焦点
    handleShowCon() {
      if(this.isShowList = true) {
        this.isShowCon = false;
      }else {
        this.isShowCon = true;
      }
    },
    //点击关闭搜索内容列表
    handleSuggestClose() {
      this.isShowList = false;
    },
    //点击获取内容列表值，附给input
    handleClickItem(index) {
      this.inputText = this.$refs.menuItem[index].innerText;
      window.location.href = 'http://www.baidu.com';
    },
    //点击搜索身边景点-失败
    handleClickNearby() {
      this.isShowNetwork = true;
    }
  }
}
</script>

<style scoped>
.mh-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: #f5f5f5;
}
.mh-header {
  z-index: 98;
  background: #fff;
  position: relative;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: box;
  width: 100%;
  height: .88rem;
  text-align: center;
  color: #fff;
}
.mh-iconfont {
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
.mh-header-left {
  display: inline-block;
  width: .4rem;
  line-height: .88rem;
  padding: 0 .2rem;
  color: #616161;
  font-size: .36rem;
  text-align: left;
}
.mh-header-title {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  box-flex: 1;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  position: relative;
  height: .6rem;
  margin: .14rem 0;
  line-height: .6rem;
  padding: 0 .6rem 0 .2rem;
  background: #f2f2f2;
  color: #212121;
  border-radius: .3rem;
}
.mh-search-input {
  position: relative;
  display: block;
  width: 100%;
  height: .4rem;
  line-height: .4rem;
  padding: .1rem 0;
  background: #f2f2f2;
  border: 0;
  font-family: "Microsoft Yahei",Arial;
  font-size: .28rem;
  border-radius: .06rem;
  text-align: center;
}
.mh-search-delete {
  position: absolute;
  top: 0;
  right: 0;
  width: .58rem;
  height: .58rem;
  background: url(../../../static/images/icon/icon-close.png) 0 .1rem no-repeat;
  background-size: .4rem .4rem;
}
.mh-header-right {
  display: inline-block;
  height: .88rem;
  line-height: .88rem;
  padding: 0 .1rem;
}
.mh-search-submit {
  display: inline-block;
  width: .74rem;
  margin-right: .04rem;
  color: #212121;
  font-size: .28rem;
}
.suggest {
  position: absolute;
  top: 37px;
  z-index: 10;
  width: 100%;
  margin-top: .2rem;
  box-shadow: 0 1px 3px 1px #c7ced4;
  background: white;
}
.mh-search-nearbycon {
  padding: .2rem;
}
.mh-search-nearbybtn {
  height: .72rem;
  line-height: .72rem;
  background-color: #fff;
  text-align: center;
  font-size: .26rem;
  color: #333;
  border: 1px solid #dde1e3;
  border-radius: 2px;
}
.mh-history-head, .mh-hotsearch-head {
  height: .64rem;
  line-height: .64rem;
  padding: 0 .2rem;
  background-color: #f0f5f6;
}
.mh-history-title, .mh-hotsearch-title {
  font-size: .26rem;
  color: #888;
}
.mh-history-deloption, .mh-hotsearch-refreshoption {
  float: right;
  font-size: .26rem;
  color: #00afc7;
}
.mh-history-deloption, .mh-hotsearch-refreshoption {
  float: right;
  font-size: .26rem;
  color: #00afc7;
}
.text-icon {
  font-family: 'icomoon';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.mh-hotsearch-group {
  position: relative;
  padding-left: .74rem;
  background-color: #fff;
  border-top: 1px solid #dce5e7;
}
.mh-hotsearch-group:last-child {
  border-bottom: 1px solid #dce5e7;
}
.mh-hotsearch-typecon {
  position: absolute;
  left: 0;
  top: 0;
  width: .74rem;
  height: 100%;
  overflow: hidden;
  line-height: 100%;
  text-align: center;
}
.mh-hotsearch-typeinner {
  position: absolute;
  width: .72rem;
  height: 70%;
  top: 15%;
  border-right: 1px solid #dce5e7;
}
.mh-hotsearch-typeicon {
  width: .3rem;
  height: .3rem;
  position: relative;
  top: 50%;
  margin-top: -.15rem;
}
.mh-sight-maxline {
  max-height: 1.8rem;
}

.mh-hotsearch-itemcon {
  zoom: 1;
  overflow: hidden;
  position: relative;
}
.mh-hotsearch-iteminner {
  zoom: 1;
  overflow: hidden;
  position: relative;
  left: 0;
  top: 0;
}
.mh-hotsearch-item {
  display: block;
  float: left;
  height: .36rem;
  max-width: 2.89rem;
  line-height: .36rem;
  text-align: center;
  display: block;
  padding-left: .3rem;
  padding-right: .3rem;
  border-right: 1px dashed #c9cccd;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: .25rem;
  margin-bottom: .25rem;
}
.mh-hotsearch-cityitem {
  display: block;
  float: left;
  height: .36rem;
  width: 24.5%;
  line-height: .36rem;
  text-align: center;
  display: block;
  border-right: 1px dashed #c9cccd;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: .25rem;
  margin-bottom: .25rem;
}
.mh-search-list {
  display: none;
  background: #fff;
  height: 200px;
  overflow: scroll;
}
.mh-search-item {
  padding-left: 10px;
  width: 150px;
  line-height: 30px;
  text-align: left;
  border-top: 1px #eee solid;
  box-sizing: border-box;
  color: #666;
}
.mh-suggest-header {
  position: relative;
  height: .5rem;
  border-bottom: 1px solid #cacaca;
  background: #f3f3f3;
  color: #555;
  font-size: .24rem;
  line-height: .5rem;
}
.mh-suggest-title {
  margin-left: .3rem;
}
.mh-suggest-close {
  position: absolute;
  top: 0;
  right: 10px;
  color: #555;
}
.mh-suggest-item {
  height: .8rem;
  padding: 0 .3rem;
  border-bottom: 1px solid #ccc;
  background: #fff;
  color: #666;
  font-size: .28rem;
  line-height: .8rem;
  text-align: left;
}
.mh-suggest-item-imgcon {
  position: relative;
  top: -.05rem;
  margin-right: .2rem;
  width: .3rem;
  height: .3rem;
}
.mh-location {
  position: fixed;
  z-index: 11;
  bottom: 100px;
  left: 50%;
  margin-left: -65px;
}
.mh-location-inner {
  padding: 10px;
  background: rgba(0,0,0,.8);
  color: white;
  font-size: .3rem;
  line-height: .4rem;
  border-radius: 4px;
}
</style>
