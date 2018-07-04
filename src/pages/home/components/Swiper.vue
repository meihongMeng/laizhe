<!-- The ref attr used to find the swiper instance -->
<template>
  <!-- swiper -->
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src='slide' />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
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
            const activeColor = '#fff'
            const normalColor = '#aeaeae'
            let color = ''
            let paginationStyle = ''
            let html = ''
            for (let i = 1; i <= total; i++) {
              if (i === current) {
                  color = activeColor
              } else {
                  color = normalColor
              }
              paginationStyle = `background:${color};opacity:1;margin-right:20px;width:10px;height:10px;transform:skew(15deg);border-radius:0;`
              html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
            }
            return html
          }
        }
      },
      swiperSlides: [
        '../../../../static/images/home/1.png',
        '../../../../static/images/home/2.png',
        '../../../../static/images/home/3.png',
        '../../../../static/images/home/4.png'
      ]
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
      if (this.swiperSlides.length < 4) {
        this.swiperSlides.push(this.swiperSlides.length + 1)
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

