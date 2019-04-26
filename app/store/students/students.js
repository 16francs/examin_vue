export const state = () => ({
  student: []
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
  }
}
