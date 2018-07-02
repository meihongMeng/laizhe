<template>
 <header class="mh-header">
   <a class="mh-header-left iconfont icon-fanhui"></a>
   <div class="mh-header-title">
      <a class="mh-linkarea" title="北京" href="javascript:void(0);">
        <i class="mh-icon-search"></i>
        <span class="mh-single-line">输入城市/景点/游玩主题</span>
      </a>
    </div>
    <div class="mh-header-right">
      <a href="javascript:void(0);" title="城市选择" class="mh-linkarea">
        <span class="mh-nav-city">北京</span>
      </a>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style scoped>

/*
 *  量到的像素 除以 50  就是rem的值
 */

.mh-header {
  height: 0.88rem;
  background: #00bcd4;
}
.mh-header-left {
  float: left;
  width: 0.4rem;
  padding: 0 0.2rem;
  display: block;
  line-height: 0.88rem;
  font-size: 0.45rem;
  color: #fff;
}
.mh-header-title {
  position: absolute;
  left: 0.8rem;
  right: 1.36rem;
  top: 0.14rem;
  line-height: 0.6rem;
  background: #fff;
  border-radius: 0.06rem;
  text-indent: 0.2rem;
}
.mh-header-title .mh-linkarea {
  color: #ccc;
}
.mh-header-right {
  float: right;
  width: 1.28rem;
  line-height: 0.88rem;
  text-align: center;
}
.mh-header-right  a.mh-linkarea {
  position: relative;
  color: #fff;
}
.mh-header-right  a.mh-linkarea .mh-nav-city {
  display: inline-block;
  width: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mh-header-right  a.mh-linkarea .mh-nav-city:after {
  content: "";
  position: absolute;
  top: -0.25rem;
  right: -0.13rem;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #fff;
}
</style>
