import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersProblemSearch from '~/components/teachers/organisms/TeachersProblemSearch'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/organisms/TeachersProblemSearch', () => {
  let wrapper
  let content
  beforeEach(() => {
    wrapper = shallowMount(TeachersProblemSearch, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('問題集検索フォームが存在すること', () => {
      expect(wrapper.find(content('search-form'))).toBeTruthy()
    })
  })
})
