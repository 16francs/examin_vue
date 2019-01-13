import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import * as Questions from '~/store/students/questions'
import axios from '~~/spec/helpers/axios'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/student/questions', () => {
  let store
  let questions
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(Questions))
    questions = [
      { id: 1, sentence: 'read', correct: '読む' },
      { id: 2, sentence: 'walk', correct: '歩く' }
    ]
  })

  afterEach(() => {
    store = null
  })

  describe('state', () => {
    test('questionsの初期値が取得できること', () => {
      expect(store.state.questions).toEqual([])
    })
  })

  describe('getters', () => {
    beforeEach(() => {
      store.replaceState({
        questions: questions
      })
    })
    test('questionsが取得できること', () => {
      expect(store.getters['questions']).toBe(questions)
    })
  })

  describe('mutations', () => {
    let commit
    beforeEach(() => {
      commit = store.commit
    })
    test('setQuestions', () => {
      commit('setQuestions', { questions: questions })
      expect(store.state.questions).toBe(questions)
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

      test('getQuestions', async () => {
        await store.dispatch('getQuestions', { problemId: 1 })
        expect(store.getters['questions']).toEqual(questions)
      })

      test('getRandomQuestions', async () => {
        await store.dispatch('getRandomQuestions', { problemId: 1 })
        expect(store.getters['questions']).toEqual(questions)
      })
    })

    describe('failure', () => {
      beforeEach(() => {
        store.$axios.setSafetyMode(false)
      })

      test('getQuestions', async () => {
        await expect(
          store.dispatch('getQuestions', { problemId: 1 })
        ).rejects.toEqual(new Error('Server Error'))
      })

      test('getRandomQuestions', async () => {
        await expect(
          store.dispatch('getRandomQuestions', { problemId: 1 })
        ).rejects.toEqual(new Error('Server Error'))
      })
    })
  })
})
