export const state = () => ({
  student: {
    name: '',
    school: '',
    login_id: ''
  }
})

export const getters = {
  student: state => state.student
}

export const mutations = {
  setStudent(state, { student }) {
    state.student = student
  }
}

export const actions = {
  async getStudent({ commit }) {
    const json = await this.$axios.get('/users/me').catch(() => {
      throw new Error('Server Error')
    })
    commit('setStudent', { student: json.data })
  },
  async editStudent({ commit }, { user }) {
    await this.$axios
      .patch('/users/me', { user })
      .then(response => {
        commit('setStudent', {
          student: response.data
        })
      })
      .catch(() => {
        throw new Error('Invalid Error')
      })
  }
}
