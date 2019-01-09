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
    const json = await axios.get(
      `${process.env.baseUrl}/api/students/problems/${problemId}`,
      {
        headers: { 'access-token': accessToken }
      }
    )
    console.log(json.data)
    if (json.status !== 200) throw new Error('Internal server error.')
    commit('setQuestions', { questions: json.data.questions })
  }
}
