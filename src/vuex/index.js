import Vue from 'vue'
import Vuex from 'vuex'
import home from '../pages/home/module.js'

Vue.use(Vuex);

// 导出store实例
export default new Vuex.Store({
  modules: {
    home
  }
})