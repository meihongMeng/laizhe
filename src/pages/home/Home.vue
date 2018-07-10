<template>
  <div>
    <index-header></index-header>
    <index-swiper :swiperInfo = "swiperInfo"></index-swiper>
    <index-iconSwiper  :iconSwiperInfo = "iconSwiperInfo"></index-iconSwiper>
    <index-listItem></index-listItem>
    <index-hotSale :hotListInfo = "hotListInfo"></index-hotSale>
    <index-guessLike :guessLikeInfo = "guessLikeInfo"></index-guessLike>
    <index-weekendTrip :weekendTripInfo = "weekendTripInfo"></index-weekendTrip>
    <index-footer></index-footer>
  </div>
</template>
<script>

import Header from "./components/Header"
import Swiper from "./components/Swiper"
import IconSwiper from "./components/IconSwiper"
import ListItem from "./components/ListItem"
import HotSale from "./components/HotSale"
import GuessLike from "./components/GuessLike"
import WeekendTrip from "./components/WeekendTrip"
import Footer from "../common/Footer"
import axios from 'axios'

export default {

  data() {
    return {
      swiperInfo: [],
      iconSwiperInfo: [],
      hotListInfo: [],
      guessLikeInfo: [],
      weekendTripInfo: []
    }
  },

  components: {
    "index-header": Header,
    "index-swiper": Swiper,
    "index-iconSwiper": IconSwiper,
    "index-listItem": ListItem,
    "index-hotSale": HotSale,
    "index-guessLike": GuessLike,
    "index-weekendTrip": WeekendTrip,
    "index-footer": Footer
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
        this.hotListInfo = data.hotListInfo;
        this.guessLikeInfo = data.guessLikeInfo;
        this.weekendTripInfo = data.weekendTripInfo;
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
