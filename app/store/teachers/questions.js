export const state = () => {
  questions: []
}

export const getters = {
  questions: state => state.questions
}

export const mutations = {
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
  }
}
