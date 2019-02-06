import * as teachers from '~/store/teachers/teachers'

export default {
  namespaced: true,

  state: teachers.state,
  getters: teachers.getters,
  mutations: teachers.mutations,
  actions: teachers.actions
}
