import Cookies from 'universal-cookie'

export const state = () => ({
  accessToken: '',
  loginUser: {
    id: 0,
    role: -1
  },
  user: {
    id: 0,
    login_id: '',
    name: 'None',
    school: 'None',
    role: 0,
    createdAt: '',
    updatedAt: ''
  }
})

export const getters = {
  accessToken: state => state.accessToken,
  loginUser: state => state.loginUser,
  user: state => state.user
}

export const mutations = {
  setAuth(state, { token, user }) {
    state.accessToken = token
    state.loginUser = user
  },

  setUser(state, payload) {
    payload.createdAt = payload.created_at
    payload.updatedAt = payload.updated_at

    delete payload.created_at
    delete payload.updated_at

    state.user = payload
  }
}

export const actions = {
  //ログイン
  async login({ commit }, { login_id, password }) {
    await this.$axios
      .post('/auth', { login_id, password })
      .then(response => {
        const { token, user } = response.data
        // cookie に値を格納
        const cookies = new Cookies()
        cookies.set('auth', JSON.stringify({ token, user }))
        // store に値を格納
        commit('setAuth', { token, user })
      })
      .catch(() => {
        throw new Error('Invalid Error')
      })
  },

  //ログアウト
  logout({ commit }) {
    // cookie の認証情報を削除
    const cookies = new Cookies()
    cookies.remove('auth')
    // store の認証情報を削除
    // 初期化方法わからないので，とりあえずstoreの初期値
    const token = ''
    const user = { id: 0, role: -1 }
    commit('setAuth', { token, user })
  },

  // ログインユーザー情報取得
  async getUser({ commit }) {
    await this.$axios
      .get('/users/me')
      .then(response => {
        commit('setUser', response.data)
      })
      .catch(() => {
        throw new Error('Server Error')
      })
  },

  // ログインユーザー情報編集
  async updateUser({ commit }, { user }) {
    await this.$axios
      .patch('/users/me', { user })
      .then(response => {
        commit('setUser', response.data)
      })
      .catch(() => {
        throw new Error('Invalid Error')
      })
  }
}
