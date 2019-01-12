import axios from '~/plugins/axios.js'

export const state = () => ({
  problems: []
})

export const getters = {
  problems: state => state.problems
}

export const mutations = {
  setProblems(state, { problems }) {
    state.problems = problems
  }
}

export const actions = {
  async getProblems({ commit }, { accessToken }) {
    const json = await this.$axios.get('/students/problems')
    console.log(json)
    if (json.status !== 200) throw new Error('Internal server error.')
    commit('setProblems', { problems: json.data.problems })
  }
}
