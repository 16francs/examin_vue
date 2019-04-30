import * as students from '~/store/students/students'

export default {
  namespaced: true,

  state: students.state,
  getters: students.getters,
  mutations: students.mutations,
  actions: students.actions
}
