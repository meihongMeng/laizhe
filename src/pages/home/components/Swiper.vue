<!-- The ref attr used to find the swiper instance -->
<template>
  <!-- swiper -->
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item, index) in swiperInfo" :key="item.id">
      <img :src='item.imgUrl' />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: ["swiperInfo"],
  name: 'carrousel',
   components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        //循环
        loop:true,
        //设定初始化时slide的索引
        initialSlide:0,
        //自动播放
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        //滑动速度
        speed:800,
        //滑动方向
        direction : 'horizontal',
        //小手掌抓取滑动
        grabCursor : true,
        //滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function(){
            console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          },
        },
        //左右点击
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
          //分页器设置         
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
          type: 'custom',
          //自定义分页器样式
          renderCustom: function (swiper, current, total) {
            const activeColor = '#fff';
            const normalColor = '#aeaeae';
            let color = '';
            let paginationStyle = '';
            let html = '';
            for (let i = 1; i <= total; i++) {
              if (i === current) {
                  color = activeColor;
              } else {
                  color = normalColor;
              }
              paginationStyle = `background:${color};opacity:1;margin-right:0.15rem;width:0.1rem;height:0.1rem;border-radius:100%;`
              html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
            }
            return html
          }
        }
      }
    }
  },
   
 // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    setInterval(() => {
      if (this.swiperInfo.length < 4) {
        this.swiperInfo.push(this.swiperInfo.length + 1)
      }
    }, 3000)
  }
}
</script>

<style scoped>
.swiper-container {
  /* 让高度变为宽度的31.25%，只能用padding-bottom实现 */
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
}
.swiper-container .swiper-wrapper .swiper-slide {
  width: 100%!important;
}
.swiper-container .swiper-wrapper .swiper-slide img {
  width: 100%;
}
</style>

