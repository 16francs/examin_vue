import * as achievements from '~/store/studnets/achievements'

export default {
  namespaced: true,

  state: achievements.state,
  getters: achievements.getters,
  mutations: achievements.mutations,
  actions: achievements.actions
}
