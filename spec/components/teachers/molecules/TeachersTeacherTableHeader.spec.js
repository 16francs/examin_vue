import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersTeacherTableHeader from '~/components/teachers/molecules/TeachersTeacherTableHeader'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/molecules/TeachersTeacherTableHeader', () => {
  let wrapper, content
  beforeEach(() => {
    wrapper = shallowMount(TeachersTeacherTableHeader, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('テーブルヘッダー要素が存在すること', () => {
      expect(wrapper.find(content('table-header'))).toBeTruthy()
    })
  })
})
