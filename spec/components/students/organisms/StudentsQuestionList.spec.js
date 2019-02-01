import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import StudentsQuestionList from '~/components/students/organisms/StudentsQuestionList'
import Module from '~~/spec/helpers/store'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/organisms/StudentsQuestionList', () => {
  let wrapper, questions, store
  beforeEach(() => {
    questions = [
      { id: 1, sentence: 'read', correct: '読む' },
      { id: 2, sentence: 'walk', correct: '歩く' }
    ]
    store = new Vuex.Store(Module)
    wrapper = shallowMount(StudentsQuestionList, { localVue, store })

    store.replaceState({
      students: { questions: { questions: questions } }
    })
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
