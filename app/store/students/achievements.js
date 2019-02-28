export const state = () => ({
  results: [],
  answeredProblemsByUser: [],
  achievements: []
})

export const getters = {
  results: state => state.results,
  answeredProblemsByUser: state => state.answeredProblemsByUser,
  achievements: state => state.achievements,
  chartData: state => {
    return {
      labels: ['正解', '不正解'],
      datasets: [
        {
          backgroundColor: ['#00d2b4', '#d3d3d3'],
          data: [
            state.achievements.filter(achievement => achievement.result).length,
            state.achievements.filter(achievement => !achievement.result).length
          ]
        }
      ]
    }
  }
}

export const mutations = {
  setResults(state, { results }) {
    state.results = results
  },
  setAnsweredProblemsByUser(state, { answeredProblemsByUser }) {
    state.answeredProblemsByUser = answeredProblemsByUser
  },
  setAchievements(state, { achievements }) {
    state.achievements = achievements
  }
}

export const actions = {
  async setResults({ commit }, { results }) {
    commit('setResults', { results: results })
  },
  async getAnsweredProblemsByUser({ commit }) {
    const json = await this.$axios.get('/students/problems_users').catch(() => {
      throw new Error('Server Error')
    })
    commit('setAnsweredProblemsByUser', {
      answeredProblemsByUser: json.data.problems_users
    })
  },
  async getAchievements({ commit }, { id }) {
    const json = await this.$axios
      .get(`/students/problems_users/${id}`)
      .catch(() => {
        throw new Error('Server Error')
      })
    commit('setAchievements', { achievements: json.data.achievements })
  }
}
