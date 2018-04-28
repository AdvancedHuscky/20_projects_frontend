import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

const store = new Vuex.Store({
  //define data
  state:{
    list:[100,200,300]
  },
  //aquire data
  getters:{
    getList:(state)=>{
      return state.list
    }
  },
  //定义修改数组方法
  mutations:{
    add:(state,msg)=>{
      state.list.push(msg);
    },
    delete:(state,index)=>{
      state.list.splice(index,1)
    }
  }
})
export default store;