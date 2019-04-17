export const state = () => ({
  questions: []
})

export const getters = {
  questions: state => state.questions
}

export const mutations = {
  addQuestion(state, payload) {
    delete payload.created_at
    delete payload.updated_at // 不要な要素の削除
    state.questions.unshift(payload)
  },

  setQuestions(state, { questions }) {
    state.questions = questions
  }
}

export const actions = {
  // 問題一覧取得
  async getQuestions({ commit }, { problem_id }) {
    await this.$axios
      .get(`/teachers/problems/${problem_id}/questions`)
      .then(response => {
        commit('setQuestions', response.data)
      })
      .catch(() => {
        throw new Error('Server Error')
      })
  },

  // 問題登録
  async createQuestion({ commit }, { question, problem_id }) {
    await this.$axios
      .post(`/teachers/problems/${problem_id}/questions`, {
        question
      })
      .then(response => {
        commit('addQuestion', response.data)
      })
      .catch(() => {
        throw new Error('Invalid Error')
      })
  }
}
