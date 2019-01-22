import * as questions from '~/store/students/questions'

export default {
  namespaced: true,

  state: questions.state,
  getters: questions.getters,
  mutations: questions.mutations,
  actions: questions.actions
}
