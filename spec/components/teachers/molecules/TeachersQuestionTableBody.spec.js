import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersQuestionTableBody from '~/components/teachers/molecules/TeachersQuestionTableBody'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/molecules/TeachersQuestionTableBody', () => {
  let wrapper
  let question
  beforeEach(() => {
    wrapper = shallowMount(TeachersQuestionTableBody, { localVue })

    question = {
      sentence: '問題',
      correct: '答え'
    }
  })

  describe('script', () => {
    describe('props', () => {
      describe('index', () => {
        test('indexの初期値', () => {
          expect(wrapper.props().index).toBe(0)
        })

        test('indexに代入', () => {
          wrapper.setProps({ index: 1 })
          expect(wrapper.props().index).toBe(1)
        })
      })

      describe('question', () => {
        test('questionの初期値', () => {
          expect(wrapper.props().question).toEqual({
            sentence: 'None',
            correct: 'None'
          })
        })

        test('questionに代入', () => {
          wrapper.setProps({ question: question })
          expect(wrapper.props().question).toEqual(question)
        })
      })
    })
  })
})
