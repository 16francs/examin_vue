import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersUserEdit from '~/components/teachers/templates/TeachersUserEdit'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/templates/TeachersUserEdit', () => {
  let wrapper, content
  beforeEach(() => {
    wrapper = shallowMount(TeachersUserEdit, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('ユーザー情報編集フォームが存在すること', () => {
      expect(wrapper.find(content('user-edit'))).toBeTruthy()
    })
  })
})
