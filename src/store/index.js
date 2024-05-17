import { createStore } from 'vuex'
import state from './state'
import * as actions from './action'
import * as mutations from './mutations'
import * as getters from './getters'

const store = createStore({
  state,
  actions,
  mutations,
  getters,
})

export default store;