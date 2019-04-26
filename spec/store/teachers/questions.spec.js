import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import * as Questions from '~/store/teachers/questions'
import axios from '~~/spec/helpers/axios'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/teachers/questions', () => {
  let store
  let question, questions
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(Questions))

    question = {
      id: 1,
      sentence: '問題',
      correct: '答え'
    }
    questions = [question]
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
      expect(store.getters['questions']).toEqual(questions)
    })
  })

  describe('mutations', () => {
    let commit
    beforeEach(() => {
      commit = store.commit
    })

    test('addProblem', () => {
      commit('addQuestion', question)
      expect(store.state.questions).toEqual(questions)
    })

    test('setQuestions', () => {
      commit('setQuestions', { questions: questions })
      expect(store.state.questions).toEqual(questions)
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
        await store.dispatch('getQuestions', {
          problem_id: 1
        })
        expect(store.getters['questions']).toEqual(questions)
      })

      test('createQuestion', async () => {
        await store.dispatch('createQuestion', {
          question: question,
          problem_id: 1
        })
        expect(store.getters['questions']).toEqual(questions)
      })
    })

    describe('failure', () => {
      beforeEach(() => {
        store.$axios.setSafetyMode(false)
      })

      test('createProblem', async () => {
        await expect(
          store.dispatch('createQuestion', {
            question: question,
            problem_id: 1
          })
        ).rejects.toEqual(new Error('Invalid Error'))
      })
    })
  })
})
