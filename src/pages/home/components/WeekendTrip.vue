<template>
  <div class="lazy-load">
    <h2 class="mh-modtitle">周末去哪儿</h2>  
    <div class="mh-weekList">
      <div class="mh-product-item" v-for="(item,index) in weekendTripInfo" :key="item.id">
        <router-link to="/list" :title="item.procName" class="mh-fulllink">
          <div class="product-imgcontainer image-ready">
            <img :src="item.urlImg" :alt="item.procName">
          </div>
          <div class="mh-product-info">
            <p class="product-name">{{item.procName}}</p>
            <p class="product-desc">{{item.procDesc}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>  
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: mapState({
    weekendTripInfo(state) {
      // return this.$store.state.home.weekendTripInfo;
      return state.home.weekendTripInfo;
    }
  })
}
</script>

<style scoped>
  .mh-modtitle {
    height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;
  }
  .mh-product-item {
    position: relative;
    margin-bottom: .1rem;
    background: #fff;
  }
  .mh-fulllink {
    display: block;
    width: 100%;
    height: 100%;
  }
  .mh-product-item .product-imgcontainer {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.4375%;
  }
  .mh-product-item img {
    transition: opacity 400ms;
    width: 100%;
  }
  .mh-product-item .mh-product-info {
    position: relative;
    padding: .14rem .2rem .2rem .2rem;
  }
  .mh-product-item .product-name {
    overflow: hidden;
    padding-right: 1.4rem;
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .mh-product-item .product-desc {
    overflow: hidden;
    padding-right: 1.4rem;
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
