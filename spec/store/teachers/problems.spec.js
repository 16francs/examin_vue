import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import * as Problems from '~/store/teachers/problems'
import axios from '~~/spec/helpers/axios'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/teachers/problems', () => {
  let store
  let problems
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(Problems))

    problems = [
      {
        id: 1,
        title: 'タイトル',
        content: '内容',
        teacher_name: '講師名',
        created_at: '2019-01-01 00:00:00',
        updated_at: '2019-01-01 00:00:00'
      }
    ]
  })

  afterEach(() => {
    store = null
  })

  describe('state', () => {
    test('problemsの初期値が取得できること', () => {
      expect(store.state.problems).toEqual([])
    })
  })

  describe('getters', () => {
    beforeEach(() => {
      store.replaceState({
        problems: problems
      })
    })

    test('problemsが取得できること', () => {
      expect(store.getters['problems']).toBe(problems)
    })
  })

  describe('mutations', () => {
    let commit
    beforeEach(() => {
      commit = store.commit
    })

    test('setProblems', () => {
      commit('setProblems', { problems: problems })
      expect(store.state.problems).toEqual(problems)
    })
  })

  describe('actions', () => {
    beforeEach(() => {
      store.$axios = axios
    })

    describe('success', () => {
      beforeEach(() => {
        store.$axios.setSafetyMode(true)
      })

      test('getProblems', async () => {
        await store.dispatch('getProblems')
        expect(store.getters['problems']).toEqual(problems)
      })
    })

    describe('failure', () => {
      beforeEach(() => {
        store.$axios.setSafetyMode(false)
      })

      test('getProblems', async () => {
        await expect(store.dispatch('getProblems')).rejects.toEqual(
          new Error('Server Error')
        )
      })
    })
  })
})
