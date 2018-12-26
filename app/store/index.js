import axios from 'axios'
import Cookies from 'universal-cookie'

export const state = () => ({
  accessToken: null,
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
  setAuth(state, { access_token, user }) {
    state.accessToken = access_token
    state.loginUser = user
  }
}

export const actions = {
  //ログインメソッド
  async login({ commit }, { login_id, password }) {
    await axios
      .post(`${process.env.baseUrl}/api/auth`, {
        login_id,
        password
      })
      .then(response => {
        const { access_token, user } = response.data
        // cookie に値を格納
        const cookies = new Cookies()
        cookies.set('auth', JSON.stringify({ access_token, user }))
        // store に値を格納
        commit('setAuth', { access_token, user })
      })
      .catch(() => {
        throw new Error('Invalid Error')
      })
  },
  //ログアウトメソッド
  async logout({ commit, getters }) {
    commit('toggle')
    await axios
      .delete(`${process.env.baseUrl}/api/auth`, {
        headers: { 'access-token': getters.accessToken }
      })
      .catch(() => {
        throw new Error('Server Error')
      })
      .finally(() => {
        // cookie の認証情報を削除
        const cookies = new Cookies()
        cookies.remove('auth')
        // store の認証情報を削除
        // 初期化方法わからないので，とりあえずstoreの初期値
        const access_token = null
        const user = { id: 0, role: -1 }
        commit('setAuth', { access_token, user })
      })
  }
}
