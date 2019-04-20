import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TeachersSubmitButton from '~/components/teachers/molecules/TeachersSubmitButton'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/molecules/TeachersSubmitButton', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TeachersSubmitButton, { localVue })
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

      test('ボタンクリックでhandleSubmitが呼ばれること', () => {
        wrapper.setMethods({ handleSubmit: mock })
        wrapper.find('button').trigger('click')
        expect(mock).toBeCalled()
      })
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('fullWidth', () => {
        test('fullWidthの初期値', () => {
          expect(wrapper.props().fullWidth).toBeTruthy()
        })

        test('fullWidthに代入', () => {
          wrapper.setProps({ fullWidth: false })
          expect(wrapper.props().fullWidth).toBeFalsy()
        })
      })

      describe('text', () => {
        test('textの初期値', () => {
          expect(wrapper.props().text).toBe('送信する')
        })

        test('textに代入', () => {
          wrapper.setProps({ text: '登録する' })
          expect(wrapper.props().text).toBe('登録する')
        })
      })
    })

    describe('methods', () => {
      describe('handleSubmit', () => {
        let mock
        beforeEach(() => {
          mock = jest.fn()
        })

        test('正常に呼び出されること', () => {
          wrapper.setMethods({ handleSubmit: mock })
          wrapper.vm.handleSubmit()
          expect(mock).toBeCalled()
        })

        test('emitが実行されること', async () => {
          await wrapper.vm.handleSubmit()
          expect(wrapper.emitted().submit).toBeTruthy()
        })
      })
    })
  })
})
