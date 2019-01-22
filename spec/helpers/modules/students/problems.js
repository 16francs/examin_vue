import * as problems from '~/store/students/problems'

export default {
  namespaced: true,

  state: problems.state,
  getters: problems.getters,
  mutations: problems.mutations,
  actions: problems.actions
}
