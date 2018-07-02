<template>
  <div>
    <index-header></index-header>
    <index-swiper></index-swiper>
  </div>
</template>
<script>

import Header from "./components/Header"
import Swiper from "./components/Swiper"

export default {
  components: {
    "index-header": Header,
    "index-swiper": Swiper
  }
}
</script>
<style>

</style>
