import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersProblemCardHeader from '~/components/teachers/molecules/TeachersProblemCardHeader'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/molecules/TeachersProblemCardHeader', () => {
  let wrapper
  let content
  beforeEach(() => {
    wrapper = shallowMount(TeachersProblemCardHeader, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('問題集タイトルが存在すること', () => {
      expect(wrapper.find(content('title'))).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('title', () => {
      test('titleの初期値', () => {
        expect(wrapper.props().title).toBe('')
      })

      test('titleに代入', () => {
        wrapper.setProps({ title: 'タイトル' })
        expect(wrapper.props().title).toBe('タイトル')
      })
    })
  })
})
