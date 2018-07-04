<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide>
      <div class="IconSwiper-icon" v-for="(item,index) in iconSwiperInfo" :key="item.id" v-if="index<=7">
        <router-link :to="item.link">
          <div class="IconSwiper-img">
            <img class="IconSwiper-imgs" :src="item.imgUrl" />
          </div>
          <div class="IconSwiper-ticket">{{item.describe}}</div>
        </router-link>
      </div>

    </swiper-slide>

    <swiper-slide>

      <div class="IconSwiper-icon" v-for="(item,index) in iconSwiperInfo" :key="item.id" v-if="index>7">
        <router-link :to="item.link">
          <div class="IconSwiper-img">
            <img class="IconSwiper-imgs" :src="item.imgUrl" />
          </div>
          <div class="IconSwiper-ticket">{{item.describe}}</div>
        </router-link>
      </div>

    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

/*import {mapState} from 'vuex'*/
export default {
  data() {
    return {
      swiperOption: {
        direction: "horizontal",
        autoHeight: true,
        pagination: ".swiper-pagination",
        observeParents: true
      }
    };
  },

  computed: {
    iconSwiperInfo() {
      return this.$store.state.home.iconSwiperInfo;
    }
  },

  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped>
.IconSwiper-img {
    width: 0.66rem;
    height: 0.66rem;
    margin-top: 0.2rem;
    margin-left: 0.58rem;
    background: url(http://simg1.qunarzz.com/mobile_platform/mobile_douxing/qtuan/imgdefault.jpg)
        #efefef center 50% no-repeat;
    border-radius: 0.15rem;
}
.IconSwiper-img .IconSwiper-imgs {
    width: 100%;
}
.IconSwiper-icon {
    width: 25%;
    overflow: hidden;
    float: left;
    text-align: center;
}
.swiper-slide {
    height: 3.8rem;
}
.swiper-pagination {
    position: absolute;
    bottom: 0;
}
.IconSwiper-ticket {
    margin-top: 0.3rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>

