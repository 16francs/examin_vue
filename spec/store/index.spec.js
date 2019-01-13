import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import * as Index from '~/store/index'
import axios from '~~/spec/helpers/axios'

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

  describe('actions', () => {
    let params
    beforeEach(() => {
      store.$axios = axios
    })

    afterEach(() => {
      params = null
    })

    describe('success', () => {
      beforeEach(() => {
        store.$axios.setSafetyMode(true)
      })

      test('login', async () => {
        params = { login_id: 'test', password: 'test' }
        await store.dispatch('login', params)
        expect(store.getters['accessToken']).toBe('test-token')
        expect(store.getters['loginUser']).toEqual({ id: 1, role: 1 })
      })

      test('logout', async () => {
        await store.dispatch('logout')
        expect(store.getters['accessToken']).toBeNull()
        expect(store.getters['loginUser']).toEqual({ id: 0, role: -1 })
      })
    })

    describe('failure', () => {
      beforeEach(() => {
        store.$axios.setSafetyMode(false)
      })

      test('login', async () => {
        params = { login_id: 'test', password: 'test' }
        await expect(store.dispatch('login', params)).rejects.toEqual(
          new Error('Invalid Error')
        )
      })

      test('logout', async () => {
        await expect(store.dispatch('logout')).rejects.toEqual(
          new Error('Server Error')
        )
      })
    })
  })
})
