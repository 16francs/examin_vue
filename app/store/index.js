import Cookies from 'universal-cookie'

export const state = () => ({
  accessToken: '',
  loginUser: {
    id: 0,
    role: -1
  }
})

export const getters = {
  accessToken: state => state.accessToken,
  loginUser: state => state.loginUser
}

export const mutations = {
  setAuth(state, { token, user }) {
    state.accessToken = token
    state.loginUser = user
  }
}

export const actions = {
  //ログインメソッド
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
  //ログアウトメソッド
  logout({ commit }) {
    // cookie の認証情報を削除
    const cookies = new Cookies()
    cookies.remove('auth')
    // store の認証情報を削除
    // 初期化方法わからないので，とりあえずstoreの初期値
    const access_token = ''
    const user = { id: 0, role: -1 }
    commit('setAuth', { access_token, user })
  }
}
