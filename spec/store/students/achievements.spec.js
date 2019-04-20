import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import * as Achievements from '~/store/students/achievements'
import axios from '~~/spec/helpers/axios'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/students/achievements', () => {
  let store
  let results, answeredProblems, achievements
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
    answeredProblems = [
      {
        id: 1,
        problem_id: 1,
        created_at: '2018-11-11T09:00:00.000+09:00',
        updated_at: '2018-11-11T09:00:00.000+09:00'
      },
      {
        id: 2,
        problem_id: 1,
        created_at: '2019-02-20T00:31:14.000+09:00',
        updated_at: '2019-02-20T00:31:14.000+09:00'
      }
    ]
    achievements = [
      {
        id: 3,
        question_id: 1,
        result: false,
        user_choice: 1,
        question: {
          id: 1,
          sentence: 'improve',
          correct: '向上させる'
        }
      },
      {
        id: 4,
        question_id: 2,
        result: false,
        user_choice: 1,
        question: {
          id: 2,
          sentence: 'raise',
          correct: '〜を上げる'
        }
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
    test('answeredProblemsByUserの初期値が取得できること', () => {
      expect(store.state.answeredProblemsByUser).toEqual([])
    })
    test('achievementsの初期値が取得できること', () => {
      expect(store.state.achievements).toEqual([])
    })
  })

  describe('getters', () => {
    beforeEach(() => {
      store.replaceState({
        results: results,
        answeredProblemsByUser: answeredProblems,
        achievements: achievements
      })
    })
    test('resultsが取得できること', () => {
      expect(store.getters['results']).toBe(results)
    })
    test('answeredProblemsByUserが取得できること', () => {
      expect(store.getters['answeredProblemsByUser']).toEqual(answeredProblems)
    })
    test('achievementsが取得できること', () => {
      expect(store.getters['achievements']).toEqual(achievements)
    })
    test('chartDataが取得できること', () => {
      expect(store.getters['chartData']).toEqual({
        labels: ['正解', '不正解'],
        datasets: [
          {
            backgroundColor: ['#00d2b4', '#d3d3d3'],
            data: [0, 2]
          }
        ]
      })
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
    test('setAnsweredProblemByUser', () => {
      commit('setAnsweredProblemsByUser', {
        answeredProblemsByUser: answeredProblems
      })
      expect(store.state.answeredProblemsByUser).toEqual(answeredProblems)
    })
    test('setAchievements', () => {
      commit('setAchievements', { achievements: achievements })
      expect(store.state.achievements).toEqual(achievements)
    })
  })

  describe('action', () => {
    beforeEach(() => {
      store.$axios = axios
    })

    describe('success', () => {
      beforeEach(() => {
        store.$axios.setSafetyMode(true)
      })

      test('setResults', async () => {
        await store.dispatch('setResults', { results: results })
        expect(store.getters['results']).toEqual(results)
      })
      test('getAnsweredProblemsByUser', async () => {
        await store.dispatch('getAnsweredProblemsByUser')
        expect(store.getters['answeredProblemsByUser']).toEqual(
          answeredProblems
        )
      })
      test('getAchievements', async () => {
        await store.dispatch('getAchievements', { id: 1 })
        expect(store.getters['achievements']).toEqual(achievements)
      })
    })

    describe('failure', () => {
      beforeEach(() => {
        store.$axios.setSafetyMode(false)
      })

      test('getAnsweredProblemsByUser', async () => {
        await expect(
          store.dispatch('getAnsweredProblemsByUser')
        ).rejects.toEqual(new Error('Server Error'))
      })
      test('getAchievements', async () => {
        await expect(
          store.dispatch('getAchievements', { id: 1 })
        ).rejects.toEqual(new Error('Server Error'))
      })
    })
  })
})
