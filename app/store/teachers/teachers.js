export const state = () => ({
  teachers: []
})

export const getters = {
  teachers: state => state.teachers
}

export const mutations = {
  setTeachers(state, { teachers }) {
    state.teachers = teachers
  }
}

export const actions = {
  // 講師一覧取得
  async getTeachers({ commit }) {
    await this.$axios
      .get('/teachers/teachers')
      .then(response => {
        commit('setTeachers', response.data)
      })
      .catch(() => {
        throw new Error('Server Error')
      })
  }
}
