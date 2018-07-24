import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

// 导出store实例
export default new Vuex.Store({
  state: {
    swiperInfo: [],
    iconSwiperInfo: [],
    hotListInfo: [],
    guessLikeInfo: [],
    weekendTripInfo: []
  },
  actions: {
    getSwiperInfo(context) {
      axios.get('/static/json/index.json')
      .then((response) => {
        if (response.status === 200) {
          // var data = response.data.data;
          var {data} = response.data;
          //想办法让mutations里的方法执行
          context.commit("changeSwiperInfo", data.swiperInfo);
          //context.commit("changeSwiperInfo", data);
          context.commit("changeIconSwiperInfo", data.iconSwiperInfo);
          context.commit("changeHotListInfo", data.hotListInfo);
          context.commit("changeGuessLikeInfo", data.guessLikeInfo);
          context.commit("changeWeekendTripInfo", data.weekendTripInfo);
        }
      })
    }
  },
  mutations: {
    changeSwiperInfo(state, data) {
      state.swiperInfo = data;
    },
    changeIconSwiperInfo(state, data) {
      state.iconSwiperInfo = data;
    },
    changeHotListInfo(state, data) {
      state.hotListInfo = data;
    },
    changeGuessLikeInfo(state, data) {
      state.guessLikeInfo = data;
    },
    changeWeekendTripInfo(state, data) {
      state.weekendTripInfo = data;
    },
  },
  getters: {}
})