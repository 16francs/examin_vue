import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import * as Questions from '~/store/teachers/questions'
import axios from '~~/spec/helpers/axios'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/teachers/questions', () => {
  let store
  let problem, question, questions
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(Questions))

    problem = {
      id: 1,
      title: 'タイトル',
      content: '問題集概要',
      tags: ['タグ1'],
      count: 1,
      teacher_name: '講師',
      created_at: '2019-01-01T00:00:00+0900',
      updated_at: '2019-01-01T00:00:00+0900'
    }
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
    test('problemの初期値が取得できること', () => {
      expect(store.state.problem).toEqual({
        id: 0,
        title: '',
        content: '',
        tags: [],
        count: 0,
        teacher_name: '',
        created_at: '',
        updated_at: ''
      })
    })

    test('questionsの初期値が取得できること', () => {
      expect(store.state.questions).toEqual([])
    })
  })

  describe('getters', () => {
    beforeEach(() => {
      store.replaceState({
        problem: problem,
        questions: questions
      })
    })

    test('problemが取得できること', () => {
      expect(store.getters['problem']).toEqual(problem)
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
      const payload = problem
      payload.questions = questions

      commit('setQuestions', payload)
      expect(store.state.problem).toEqual(problem)
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
        await store.dispatch('getQuestions', { problem_id: 1 })
        expect(store.getters['problem']).toEqual(problem)
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

      test('getQuestions', async () => {
        await expect(
          store.dispatch('getQuestions', { problem_id: 1 })
        ).rejects.toEqual(new Error('Server Error'))
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
