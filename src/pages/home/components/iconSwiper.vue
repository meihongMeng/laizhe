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
  props: ["iconSwiperInfo"],
  data() {
    return {
      swiperOption: {
        direction: "horizontal",
        autoHeight: true,
        observeParents: true,
         //分页器设置         
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
          type: 'custom',
          //自定义分页器样式
          renderCustom: function (swiper, current, total) {
            const activeColor = '#00afc7';
            const normalColor = '#999';
            let color = '';
            let paginationStyle = '';
            let html = '';
            for (let i = 1; i <= total; i++) {
              if (i === current) {
                  color = activeColor;
              } else {
                  color = normalColor;
              }
              paginationStyle = `background:${color};opacity:1;margin-right:0.2rem;width:0.1rem;height:0.1rem;border-radius:100%;`
              html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
            }
            return html
          }
        }
      }
    };
  },

  computed: {
    // iconSwiperInfo() {
    //   return this.$store.state.home.iconSwiperInfo;
    // }
  },

  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped>
.IconSwiper-img {
   display: inline-block;
  width: 1.1rem;
  height: 1.1rem;
}
.IconSwiper-img .IconSwiper-imgs {
    width: 1.1rem;
    height: 1.1rem;
    background: 0;
    opacity: 1;
}
.IconSwiper-icon {
    float: left;
    width: 25%;
    height: 1.5rem;
    padding-top: .1rem;
    text-align: center;
}
.swiper-slide {
    height: 3.8rem;
    background: #fff;
}
.swiper-pagination {
    position: absolute;
    bottom: 5px;
}
.IconSwiper-ticket {
   margin-top: .1rem;
    color: #212121;
    font-size: .28rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>

