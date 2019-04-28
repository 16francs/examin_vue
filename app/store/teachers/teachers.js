export const state = () => ({
  teachers: []
})

export const getters = {
  teachers: state => state.teachers
}

export const mutations = {
  addTeacher(state, payload) {
    state.teachers.unshift(payload)
  },

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
  },

  // 講師登録
  async createTeacher({ commit }, { teacher }) {
    await this.$axios
      .post('/teachers/teachers', { teacher })
      .then(response => {
        commit('addTeacher', response.data)
      })
      .catch(() => {
        throw new Error('Invalid Error')
      })
  }
}
