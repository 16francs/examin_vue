import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import * as Problems from '~/store/students/problems'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/student/problems', () => {
  let store
  let accessToken, problems
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(Problems))
    accessToken = 'aiueo12345'
    problems = [
      { id: 1, title: 'テスト', content: 'テストデータです'},
      { id: 2, title: 'テスト2', content: 'テストデータです'}
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
      expect(store.state.problems).toBe(problems)
    })
  })
})
