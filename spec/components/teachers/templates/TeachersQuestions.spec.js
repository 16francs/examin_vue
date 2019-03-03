import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersQuestions from '~/components/teachers/templates/TeachersQuestions'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/templates/TeachersQuestions', () => {
  let wrapper, content
  beforeEach(() => {
    wrapper = shallowMount(TeachersQuestions, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('問題作成ボタンが存在すること', () => {
      expect(wrapper.find(content('question-new-button'))).toBeTruthy()
    })
  })
})
