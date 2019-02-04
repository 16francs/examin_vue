import * as problems from '~/store/teachers/problems'

export default {
  namespaced: true,

  state: problems.state,
  getters: problems.getters,
  mutations: problems.mutations,
  actions: problems.actions
}
