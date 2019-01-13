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
  async getProblems({ commit }) {
    const json = await this.$axios.get('/students/problems').catch(() => {
      throw new Error('Server Error')
    })
    commit('setProblems', { problems: json.data.problems })
  }
}
