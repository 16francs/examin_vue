import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import * as Index from '~/store/index'
import axios from '~~/spec/helpers/axios'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/index.js', () => {
  let store
  let accessToken, loginUser, user
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(Index))

    accessToken = 'aiueo12345'
    loginUser = { id: 1, role: 2 }
    user = {
      id: 1,
      login_id: '1og1n1d',
      name: '講師',
      school: '学校',
      role: 2,
      created_at: '2019-01-01T00:00:00+0900',
      updated_at: '2019-01-01T00:00:00+0900'
    }
  })

  afterEach(() => {
    store = null
  })

  describe('state', () => {
    test('accessTokenの初期値が取得できること', () => {
      expect(store.state.accessToken).toBe('')
    })

    test('loginUserの初期値が取得できること', () => {
      expect(store.state.loginUser).toEqual({ id: 0, role: -1 })
    })

    test('userの初期値が取得できること', () => {
      expect(store.state.user).toEqual({
        id: 0,
        login_id: '',
        name: 'None',
        school: 'None',
        role: 0,
        created_at: '',
        updated_at: ''
      })
    })
  })

  describe('getters', () => {
    beforeEach(() => {
      store.replaceState({
        accessToken: accessToken,
        loginUser: loginUser,
        user: user
      })
    })

    test('accessTokenが取得できること', () => {
      expect(store.getters['accessToken']).toBe(accessToken)
    })

    test('loginUserが取得できること', () => {
      expect(store.getters['loginUser']).toBe(loginUser)
    })

    test('userが取得できること', () => {
      expect(store.getters['user']).toBe(user)
    })
  })

  describe('mutations', () => {
    let commit
    beforeEach(() => {
      commit = store.commit
    })

    test('setAuth', () => {
      commit('setAuth', { token: accessToken, user: loginUser })
      expect(store.state.accessToken).toBe(accessToken)
      expect(store.state.loginUser).toBe(loginUser)
    })

    test('setUser', () => {
      commit('setUser', user)
      expect(store.state.user).toBe(user)
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
        expect(store.getters['accessToken']).toBe(accessToken)
        expect(store.getters['loginUser']).toEqual(loginUser)
      })

      test('logout', () => {
        store.dispatch('logout')
        expect(store.getters['accessToken']).toBe('')
        expect(store.getters['loginUser']).toEqual({ id: 0, role: -1 })
      })

      test('getUser', async () => {
        await store.dispatch('getUser')
        expect(store.getters['user']).toEqual(user)
      })

      test('updateUser', async () => {
        params = {
          login_id: '1og1n1d',
          name: '講師',
          school: '学校'
        }
        await store.dispatch('updateUser', { user: params })
        expect(store.getters['user']).toEqual(user)
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

      test('getUser', async () => {
        await expect(store.dispatch('getUser')).rejects.toEqual(
          new Error('Server Error')
        )
      })

      test('updateUser', async () => {
        params = { name: '', school: '', login_id: '' }
        await expect(
          store.dispatch('updateUser', { user: params })
        ).rejects.toEqual(new Error('Invalid Error'))
      })
    })
  })
})
