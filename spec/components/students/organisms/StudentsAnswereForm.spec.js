import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import StudentsAnswerForm from '~/components/students/organisms/StudentsAnswerForm'
import Module from '~~/spec/helpers/store'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/organisms/StudentsAnswerForm', () => {
  let wrapper, store, $route, $router
  let questions
  beforeEach(() => {
    questions = [
      { id: 1, sentence: 'read', correct: '読む' },
      { id: 2, sentence: 'walk', correct: '歩く' }
    ]

    $route = {
      params: {
        id: 1
      }
    }

    $router = {
      push: jest.fn()
    }

    store = new Vuex.Store(Module)

    store.replaceState({
      students: {
        questions: {
          questions: questions
        }
      }
    })

    wrapper = shallowMount(StudentsAnswerForm, {
      localVue,
      mocks: {
        $route,
        $router
      },
      store
    })
  })

  describe('script', () => {
    describe('data', () => {
      test('dataの初期値', () => {
        expect(wrapper.vm.limit).toBe(100)
        expect(wrapper.vm.number).toBe(0)
        expect(wrapper.vm.selects).toEqual([])
        expect(wrapper.vm.isTesting).toBeTruthy()
      })
    })

    describe('watch', () => {
      beforeEach(() => {
        wrapper.setData({ number: 2 })
      })

      test('number == questions.length', () => {
        expect(wrapper.vm.isTesting).toBeFalsy()
      })
    })

    describe('mounted', () => {
      beforeEach(() => {
        wrapper.setData({ limit: 0 })
      })
    })

    describe('method', () => {
      describe('select', () => {
        test('number < questions.length', () => {
          wrapper.vm.select()
          expect(wrapper.vm.selects.length).toBe(1)
          expect(wrapper.vm.number).toBe(1)
          expect(wrapper.vm.limit).toBe(100)
        })
      })
    })
  })
})
