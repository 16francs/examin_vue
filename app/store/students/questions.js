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
  async getQuestions({ commit }, { accessToken, problemId }) {
    const json = await this.$axios.get(`/students/problems/${problemId}`)
    console.log(json.data)
    if (json.status !== 200) throw new Error('Internal server error.')
    commit('setQuestions', { questions: json.data.questions })
  },
  async getRandomQuestions({ commit }, { accessToken, problemId }) {
    const json = await this.$axios.get(
      `/students/problems/${problemId}/questions/random?count=10`
    )
    if (json.status !== 200) throw new Error('Internal server error.')
    commit('setQuestions', { questions: json.data.questions })
  }
}
