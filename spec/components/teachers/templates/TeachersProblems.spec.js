import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersProblems from '~/components/teachers/templates/TeachersProblems'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/templates/TeachersProblems', () => {
  let wrapper, content
  beforeEach(() => {
    wrapper = shallowMount(TeachersProblems, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('問題集検索フォームが存在すること', () => {
      expect(wrapper.find(content('problem-search'))).toBeTruthy()
    })

    test('問題集一覧が存在すること', () => {
      expect(wrapper.find(content('problem-list'))).toBeTruthy()
    })
  })
})
