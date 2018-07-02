<template>
  <div>
    <index-header></index-header>
    <index-swiper></index-swiper>
    <index-iconSwiper></index-iconSwiper>
  </div>
</template>
<script>

import Header from "./components/Header"
import Swiper from "./components/Swiper"
import IconSwiper from "./components/IconSwiper"

export default {
  components: {
    "index-header": Header,
    "index-swiper": Swiper,
    "index-iconSwiper": IconSwiper
  }
}
</script>
<style>

</style>
