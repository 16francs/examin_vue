import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TeachersProblemForm from '~/components/teachers/molecules/TeachersProblemForm'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/molecules/TeachersProblemForm', () => {
  let wrapper, content
  let problem
  beforeEach(() => {
    wrapper = mount(TeachersProblemForm, { localVue })
    content = id => `[data-test="${id}"]`

    problem = {
      title: 'タイトル',
      content: '概要',
      tags: ['タグ1', 'タグ2']
    }
  })

  describe('template', () => {
    test('タイトルフォームが存在すること', () => {
      expect(wrapper.find(content('form-title'))).toBeTruthy()
    })

    test('概要フォームが存在すること', () => {
      expect(wrapper.find(content('form-content'))).toBeTruthy()
    })

    test('タグフォームが存在すること', () => {
      expect(wrapper.find(content('form-tags'))).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('value', () => {
        test('valueの初期値', () => {
          expect(wrapper.props().value).toEqual({
            title: '',
            content: '',
            tags: []
          })
        })

        test('valueに代入', () => {
          wrapper.setProps({ value: problem })
          expect(wrapper.props().value).toEqual(problem)
        })
      })
    })
  })
})
