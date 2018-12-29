import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import SubmitButton from '~/components/common/molecules/SubmitButton'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('components/common/molecules/SubmitButton', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(SubmitButton, { localVue })
  })

  describe('template', () => {
    test('ボタンが存在すること', () => {
      expect(wrapper.contains('button')).toBeTruthy()
    })

    describe('ボタンクリック', () => {
      let mock
      beforeEach(() => {
        mock = jest.fn()
      })

      test('ボタンクリックでdoSubmitが呼ばれること', () => {
        wrapper.setMethods({ doSubmit: mock })
        wrapper.find('button').trigger('click')
        expect(mock).toBeCalled()
      })
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('text', () => {
        test('textの初期値', () => {
          expect(wrapper.props().text).toBe('送信する')
        })

        test('textに代入', () => {
          wrapper.setProps({ text: 'ログイン' })
          expect(wrapper.props().text).toBe('ログイン')
        })
      })
    })
  })

  describe('methods', () => {
    describe('doSubmit', () => {
      let mock
      beforeEach(() => {
        mock = jest.fn()
      })

      test('正常に呼び出されること', () => {
        wrapper.setMethods({ doSubmit: mock })
        wrapper.vm.doSubmit()
        expect(mock).toBeCalled()
      })

      test('emitが実行されること', async done => {
        await wrapper.vm.doSubmit()
        expect(wrapper.emitted().submit).toBeTruthy()
        done()
      })
    })
  })
})
