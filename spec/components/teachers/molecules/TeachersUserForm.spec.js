import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TeachersUserForm from '~/components/teachers/molecules/TeachersUserForm'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/molecules/TeachersUserForm', () => {
  let wrapper, content
  let user
  beforeEach(() => {
    wrapper = mount(TeachersUserForm, { localVue })
    content = id => `[data-test="${id}"]`

    user = {
      name: '山田 太郎',
      school: '16francs',
      login_id: 'loginId'
    }
  })

  describe('template', () => {
    test('名前フォームが存在すること', () => {
      expect(wrapper.find(content('form-name'))).toBeTruthy()
    })

    test('学校名フォームが存在すること', () => {
      expect(wrapper.find(content('form-school'))).toBeTruthy()
    })

    test('ログインIDフォームが存在すること', () => {
      expect(wrapper.find(content('form-login-id'))).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('value', () => {
        test('valueの初期値', () => {
          expect(wrapper.props().value).toEqual({
            name: '',
            school: '',
            login_id: ''
          })
        })

        test('valueに代入', () => {
          wrapper.setProps({ value: user })
          expect(wrapper.props().value).toEqual(user)
        })
      })
    })
  })
})
