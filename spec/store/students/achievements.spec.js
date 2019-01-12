import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import * as Achievements from '~/store/students/achievements'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/students/achievements', () => {
  let store
  let results
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(Achievements))
    results = [
      {
        question_id: 1,
        result: false,
        user_choice: 2
      },
      {
        question_id: 2,
        result: true,
        user_choice: 3
      }
    ]
  })
  afterEach(() => {
    store = null
  })
  describe('state', () => {
    test('resultsの初期値が取得できること', () => {
      expect(store.state.results).toEqual([])
    })
  })
  describe('getters', () => {
    beforeEach(() => {
      store.replaceState({
        results: results
      })
    })
    test('resultsが取得できること', () => {
      expect(store.getters['results']).toBe(results)
    })
  })
  describe('mutations', () => {
    let commit
    beforeEach(() => {
      commit = store.commit
    })
    test('setResults', () => {
      commit('setResults', { results: results })
      expect(store.state.results).toBe(results)
    })
  })
})
