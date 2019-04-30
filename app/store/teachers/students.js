export const state = () => ({
  students: []
})

export const getters = {
  students: state => state.students
}

export const mutations = {
  addStudent(state, payload) {
    state.students.unshift(payload)
  },

  setStudents(state, { students }) {
    state.students = students
  }
}

export const actions = {
  // 生徒一覧取得
  async getStudents({ commit }) {
    await this.$axios
      .get('/teachers/students')
      .then(response => {
        commit('setStudents', response.data)
      })
      .catch(() => {
        throw new Error('Server Error')
      })
  },

  // 生徒登録
  async createStudent({ commit }, { student }) {
    await this.$axios
      .post('/teachers/students', { student })
      .then(response => {
        commit('addStudent', response.data)
      })
      .catch(() => {
        throw new Error('Invalid Error')
      })
  }
}
