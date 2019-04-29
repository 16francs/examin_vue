import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersStudentTableHeader from '~/components/teachers/molecules/TeachersStudentTableHeader'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/molecules/TeachersStudentTableHeader', () => {
  let wrapper, content
  beforeEach(() => {
    wrapper = shallowMount(TeachersStudentTableHeader, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('テーブルヘッダー要素が存在すること', () => {
      expect(wrapper.find(content('table-header'))).toBeTruthy()
    })
  })
})
