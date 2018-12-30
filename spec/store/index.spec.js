import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import * as Index from '~/store/index'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/index.js', () => {
  let store
  let accessToken, loginUser
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(Index))

    accessToken = 'aiueo12345'
    loginUser = { id: 1, role: 2 }
  })

  afterEach(() => {
    store = null
  })

  describe('state', () => {
    test('accessTokenの初期値が取得できること', () => {
      expect(store.state.accessToken).toBeNull()
    })

    test('loginUserの初期値が取得できること', () => {
      expect(store.state.loginUser).toEqual({ id: 0, role: -1 })
    })
  })

  describe('getters', () => {
    beforeEach(() => {
      store.replaceState({
        accessToken: accessToken,
        loginUser: loginUser
      })
    })

    test('accessTokenが取得できること', () => {
      expect(store.getters['accessToken']).toBe(accessToken)
    })

    test('loginUserが取得できること', () => {
      expect(store.getters['loginUser']).toBe(loginUser)
    })
  })

  describe('mutations', () => {
    let commit
    beforeEach(() => {
      commit = store.commit
    })

    test('setAuth', () => {
      commit('setAuth', { access_token: accessToken, user: loginUser })
      expect(store.state.accessToken).toBe(accessToken)
      expect(store.state.loginUser).toBe(loginUser)
    })
  })
})
