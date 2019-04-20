import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersQuestionNewForm from '~/components/teachers/organisms/TeachersQuestionNewForm'
import Module from '~~/spec/helpers/store'
import axios from '~~/spec/helpers/axios'
import { Toast } from 'buefy/dist/components/toast'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)
localVue.use(Toast)

describe('components/teachers/organisms/TeachersQuestionNewForm', () => {
  let wrapper, store, $route
  let question
  beforeEach(() => {
    let $route = {
      params: {
        problem_id: 1
      }
    }

    store = new Vuex.Store(Module)
    wrapper = shallowMount(TeachersQuestionNewForm, {
      localVue,
      store,
      mocks: {
        $route
      }
    })

    question = {
      id: 1,
      sentence: '問題',
      correct: '答え'
    }
  })

  afterEach(() => {
    store = null
  })

  describe('script', () => {
    describe('data', () => {
      test('error', () => {
        expect(wrapper.vm.error).toBeFalsy()
      })

      test('question', () => {
        expect(wrapper.vm.question).toEqual({
          sentence: '',
          correct: ''
        })
      })
    })

    describe('methods', () => {
      beforeEach(() => {
        store.$axios = axios
      })

      describe('doSubmit', () => {
        describe('success', () => {
          beforeEach(() => {
            store.$axios.setSafetyMode(true)
          })

          test('正常に実行されること', async () => {
            await wrapper.vm.doSubmit()
            expect(store.getters['teachers/questions/questions']).toEqual([
              question
            ])
          })
        })

        describe('failure', () => {
          beforeEach(() => {
            store.$axios.setSafetyMode(false)
          })

          test('正常に実行されること', async () => {
            await wrapper.vm.doSubmit()
            expect(store.getters['teachers/questions/questions']).toEqual([])
          })
        })
      })

      test('openAlert', () => {
        jest.useFakeTimers()
        wrapper.vm.openAlert()
        expect(wrapper.vm.error).toBeTruthy()
        jest.runAllTimers()
        expect(wrapper.vm.error).toBeFalsy()
      })
    })
  })
})
