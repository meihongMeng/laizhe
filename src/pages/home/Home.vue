<template>
  <div>
    <index-header></index-header>
    <index-swiper :swiperInfo = "swiperInfo"></index-swiper>
    <index-iconSwiper  :iconSwiperInfo = "iconSwiperInfo"></index-iconSwiper>
    <index-listItem></index-listItem>
  </div>
</template>
<script>

import Header from "./components/Header"
import Swiper from "./components/Swiper"
import IconSwiper from "./components/IconSwiper"
import ListItem from "./components/ListItem"
import axios from 'axios'

export default {

  data() {
    return {
      swiperInfo: [],
      iconSwiperInfo: []
    }
  },

  components: {
    "index-header": Header,
    "index-swiper": Swiper,
    "index-iconSwiper": IconSwiper,
    "index-listItem": ListItem
  },
  methods: {
    getHomeData() {
      axios.get('/static/json/index.json')
      .then(this.handleGetDataSucc.bind(this))
      .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc(response) {
      if (response.status === 200) {
        // var data = response.data.data;
        var {data} = response.data;
        this.swiperInfo = data.swiperInfo;
        this.iconSwiperInfo = data.iconSwiperInfo;
      }
    },
    handleGetDataErr(error) {
      console.log(error);
    }
  },
  mounted() {
    this.getHomeData();
  }
}
</script>
<style>

</style>
