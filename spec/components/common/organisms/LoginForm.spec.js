import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import LoginForm from '~/components/common/organisms/LoginForm'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/organisms/LoginForm', () => {
  let wrapper
  let content
  beforeEach(() => {
    wrapper = mount(LoginForm, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('login_idフォームが存在すること', () => {
      expect(wrapper.find(content('login_id'))).toBeTruthy()
    })

    test('passwordフォームが存在すること', () => {
      expect(wrapper.find(content('password'))).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('error', () => {
        test('errorの初期値', () => {
          expect(wrapper.props().error).toBeFalsy()
        })

        test('errorに代入', () => {
          wrapper.setProps({ error: true })
          expect(wrapper.props().error).toBeTruthy()
        })
      })
    })

    describe('data', () => {
      test('formData', () => {
        expect(wrapper.vm.formData).toEqual({ login_id: '', password: '' })
      })
    })

    describe('methods', () => {
      let mock
      beforeEach(() => {
        mock = jest.fn()
      })

      describe('doSubmit', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ doSubmit: mock })
          wrapper.vm.doSubmit()
          expect(mock).toBeCalled()
        })

        test('emitが正常に実行されること', async done => {
          await wrapper.vm.doSubmit()
          expect(wrapper.emitted().login).toBeTruthy()
          done()
        })

        test('emitのペイロードの検証', async done => {
          const formData = { login_id: '', password: '' }
          await wrapper.vm.doSubmit()
          expect(wrapper.emitted().login).toEqual([[formData]])
          done()
        })
      })
    })
  })
})
