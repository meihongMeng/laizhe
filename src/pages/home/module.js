
import axios from 'axios'

export default {
  state: {
    swiperInfo: [],
    iconSwiperInfo: [],
    hotListInfo: [],
    guessLikeInfo: [],
    weekendTripInfo: []
  },
  actions: {
    getIndexInfo(context) {
      axios.get('/static/json/index.json')
      .then((response) => {
        if (response.status === 200) {
          // var data = response.data.data;
          var {data} = response.data;
          //想办法让mutations里的方法执行
          context.commit("changeIndexInfo", data);
          //context.commit("changeSwiperInfo", data);
        }
      })
    }
  },
  mutations: {
    changeIndexInfo(state, data) {
      state.swiperInfo = data.swiperInfo;
      state.iconSwiperInfo = data.iconSwiperInfo;
      state.hotListInfo = data.hotListInfo;
      state.guessLikeInfo = data.guessLikeInfo;
      state.weekendTripInfo = data.weekendTripInfo;
    }
  },
  //getters是对state的一层封装
  getters: {
    shouldGetData(state) {
      if(!state.swiperInfo.length &&
        !state.iconSwiperInfo.length &&
        !state.hotListInfo.length &&
        !state.guessLikeInfo.length &&
        !state.weekendTripInfo.length) {
          return true
        }else {
          return false
        }
    }
  }
}