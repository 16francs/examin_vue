import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import QuestionList from '~/components/students/organisms/QuestionList'
import * as Questions from '~/store/students/questions'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/organisms/QuestionList', () => {
  let wrapper, getters, questions, store
  beforeEach(() => {
    questions = [
      { id: 1, sentence: 'read', correct: '読む' },
      { id: 2, sentence: 'walk', correct: '歩く' }
    ]
    getters = {
      questions: () => questions
    }
    store = new Vuex.Store({
      modules: {
        students: {
          namespaced: true,

          modules: {
            questions: {
              namespaced: true,

              state: Questions.state,
              getters,
              mutations: Questions.mutations,
              actions: Questions.actions
            }
          }
        }
      }
    })
    wrapper = shallowMount(QuestionList, { localVue, store })
  })

  describe('template', () => {
    test('QuestionListが存在すること', () => {
      expect(wrapper.contains('[data-test="question-list"]')).toBeTruthy()
    })

    test('questionが表示されているか', () => {
      expect(wrapper.contains('[data-test="question-box"]')).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('computed', () => {
      describe('mapGetters', () => {
        test('storeからquestionsが取り出せているか', () => {
          expect(wrapper.vm.questions).toEqual(questions)
        })
      })
    })
  })
})
