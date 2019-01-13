import axios from '~/plugins/axios.js'

export const state = () => ({
  questions: []
})

export const getters = {
  questions: state => state.questions
}

export const mutations = {
  setQuestions(state, { questions }) {
    state.questions = questions
  }
}

export const actions = {
  async getQuestions({ commit }, { problemId }) {
    const json = await this.$axios
      .get(`/students/problems/${problemId}`)
      .catch(() => {
        throw new Error('Server Error')
      })
    commit('setQuestions', { questions: json.data.questions })
  },
  async getRandomQuestions({ commit }, { problemId }) {
    const json = await this.$axios
      .get(`/students/problems/${problemId}/questions/random?count=10`)
      .catch(() => {
        throw new Error('Server Error')
      })
    commit('setQuestions', { questions: json.data.questions })
  }
}
