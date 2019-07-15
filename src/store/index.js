import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,     //严格模式——只能由mutation修改状态
  state: {
    count: 0
  },
  mutations: {
    addCount(state, arg){
      arg=arg||1;
      state.count+=arg;
    },
    minusCount(state, arg){
      arg=arg||1;
      state.count-=arg;
    }
  },
  actions: {
    addCount({commit}, arg){
      commit('addCount', arg);
    },
    minusCount({commit}, arg){
      commit('minusCount', arg);
    }
  },
  getters: {

  }
});
