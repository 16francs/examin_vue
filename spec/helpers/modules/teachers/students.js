import * as students from '~/store/teachers/students'

export default {
  namespaced: true,

  state: students.state,
  getters: students.getters,
  mutations: students.mutations,
  actions: students.actions
}
