import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersQuestionNew from '~/components/teachers/templates/TeachersQuestionNew'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/templates/TeachersQuestionNew', () => {
  let wrapper, content
  beforeEach(() => {
    wrapper = shallowMount(TeachersQuestionNew, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('問題登録フォームが存在すること', () => {
      expect(wrapper.find(content('question-new'))).toBeTruthy()
    })
  })
})
