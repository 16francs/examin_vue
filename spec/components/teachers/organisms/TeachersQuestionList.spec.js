import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersQuestionList from '~/components/teachers/organisms/TeachersQuestionList'
import Module from '~~/spec/helpers/store'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/organisms/TeachersQuestionList', () => {
  let wrapper, store
  let questions
  beforeEach(() => {
    questions = [
      {
        id: 1,
        sentence: '問題',
        correct: '答え'
      }
    ]

    store = new Vuex.Store(Module)
    wrapper = shallowMount(TeachersQuestionList, { localVue, store })

    store.replaceState({
      teachers: { questions: { questions: questions } }
    })
  })

  describe('script', () => {
    describe('computed', () => {
      describe('mapGetters', () => {
        test('store から questions が取得できること', () => {
          expect(wrapper.vm.questions).toEqual(questions)
        })
      })
    })
  })
})
