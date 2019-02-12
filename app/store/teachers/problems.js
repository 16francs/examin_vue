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
  // 問題集一覧取得
  async getProblems({ commit }) {
    await this.$axios
      .get('/teachers/problems')
      .then(response => {
        commit('setProblems', response.data)
      })
      .catch(() => {
        throw new Error('Server Error')
      })
  },

  // 問題集登録
  async createProblem({ commit }, { problem }) {
    await this.$axios.post('/teachers/problems', { problem }).catch(() => {
      throw new Error('Invalid Error')
    })
  }
}
