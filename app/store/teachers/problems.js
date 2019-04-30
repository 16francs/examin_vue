export const state = () => ({
  problems: []
})

export const getters = {
  problems: state => state.problems
}

export const mutations = {
  addProblem(state, payload) {
    delete payload.created_at // 不要な要素の削除
    state.problems.unshift(payload)
  },

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
    await this.$axios
      .post('/teachers/problems', { problem })
      .then(response => {
        commit('addProblem', response.data)
      })
      .catch(() => {
        throw new Error('Invalid Error')
      })
  },

  // 問題一括登録用テンプレートの取得
  getTemplateFile() {
    return new Promise((resolve, reject) => {
      this.$axios.get('/teachers/problems/download', {
        responseType: 'blob'
      }).then(response => resolve(response), error => reject(error))
    })
  }
}
