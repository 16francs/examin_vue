import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersQuestionForm from '~/components/teachers/molecules/TeachersQuestionForm'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/molecules/TeachersQuestionForm', () => {
  let wrapper, content
  let question
  beforeEach(() => {
    wrapper = shallowMount(TeachersQuestionForm, { localVue })
    content = id => `[data-test="${id}"]`

    question = {
      sentence: '問題',
      correct: '答え'
    }
  })

  describe('template', () => {
    test('問題フォームが存在すること', () => {
      expect(wrapper.find(content('form-sentence'))).toBeTruthy()
    })

    test('答えフォームが存在すること', () => {
      expect(wrapper.find(content('form-correct'))).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('value', () => {
        test('valueの初期値', () => {
          expect(wrapper.props().value).toEqual({
            sentence: '',
            correct: ''
          })
        })

        test('valueに代入', () => {
          wrapper.setProps({ value: question })
          expect(wrapper.props().value).toEqual(question)
        })
      })
    })
  })
})
