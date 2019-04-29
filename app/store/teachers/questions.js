export const state = () => ({
  questions: []
})

export const getters = {
  questions: state => state.questions
}

export const mutations = {
  addQuestion(state, payload) {
    delete payload.created_at
    delete payload.updated_at
    delete payload.problem_id // 不要な要素の削除
    state.questions.unshift(payload)
  },

  addQuestions(state, { questions }) {
    for (let question of questions) {
      state.questions.push(question)
    }
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
  },

  // 問題一括登録
  async createProblems({ commit }, { problem_id, formData }) {
    await this.$axios
      .post(`/teachers/problems/${problem_id}/questions/upload`, formData)
      .then(response => {
        commit('addQuestions', response.data)
      })
      .catch(() => {
        throw new Error('Invalid Error')
      })
  }
}
