export const state = () => ({
  results: null
})

export const getters = {
  results: state => state.results
}

export const mutations = {
  setResults(state, { results }) {
    state.results = results
  }
}

export const actions = {
  async setResults({ commit }, { results }) {
    commit('setResults', { results: results })
  }
}
