<template>
  <div>
    <index-header></index-header>
    <index-swiper :swiperInfo = "this.$store.state.swiperInfo"></index-swiper>
    <index-iconSwiper  :iconSwiperInfo = "this.$store.state.iconSwiperInfo"></index-iconSwiper>
    <index-listItem></index-listItem>
    <index-hotSale :hotListInfo = "this.$store.state.hotListInfo"></index-hotSale>
    <index-guessLike :guessLikeInfo = "this.$store.state.guessLikeInfo"></index-guessLike>
    <index-weekendTrip :weekendTripInfo = "this.$store.state.weekendTripInfo"></index-weekendTrip>
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

export default {

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
    // getHomeData() {
    //   axios.get('/static/json/index.json')
    //   .then(this.handleGetDataSucc.bind(this))
    //   .catch(this.handleGetDataErr.bind(this))
    // },
    // handleGetDataSucc(response) {
    //   if (response.status === 200) {
    //     // var data = response.data.data;
    //     var {data} = response.data;
    //     //想办法让mutations里的方法执行
    //     this.$store.commit("changeSwiperInfo", data.swiperInfo);
    //     //this.$store.commit("changeSwiperInfo", data);
    //     this.$store.commit("changeIconSwiperInfo", data.iconSwiperInfo);
    //     this.$store.commit("changeHotListInfo", data.hotListInfo);
    //     this.$store.commit("changeGuessLikeInfo", data.guessLikeInfo);
    //     this.$store.commit("changeWeekendTripInfo", data.weekendTripInfo);

    //     //this.swiperInfo = data.swiperInfo;
    //     //this.iconSwiperInfo = data.iconSwiperInfo;
    //     //this.hotListInfo = data.hotListInfo;
    //     //this.guessLikeInfo = data.guessLikeInfo;
    //     //this.weekendTripInfo = data.weekendTripInfo;
    //   }
    // },
    // handleGetDataErr(error) {
    //   console.log(error);
    // }
  },
  mounted() {
    this.$store.dispatch("getSwiperInfo");
    // this.getHomeData();
  }
}
</script>
<style>

</style>
