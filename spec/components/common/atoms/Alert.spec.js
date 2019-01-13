import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import Alert from '~/components/common/atoms/Alert'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/atoms/Alert', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Alert, { localVue })
  })
  describe('template', () => {
    test('Alertが存在するか', () => {
      expect(wrapper.contains('article')).toBeTruthy()
    })
    test('閉じるボタンが存在するか', () => {
      expect(wrapper.contains('button')).toBeTruthy()
    })
    describe('ボタンクリック', () => {
      let mock
      beforeEach(() => {
        mock = jest.fn()
        wrapper.setMethods({ close: mock })
      })
      test('ボタンクリックでcloseが実行されること', () => {
        wrapper.find('button').trigger('click')
        expect(mock).toBeCalled()
      })
    })
  })
  describe('script', () => {
    describe('props', () => {
      describe('error', () => {
        test('errorの初期値がtrueか', () => {
          expect(wrapper.props().error).toBeTruthy()
        })
        test('errorをfalseに変更', () => {
          wrapper.setProps({ error: false })
          expect(wrapper.props().error).toBeFalsy()
        })
      })
      describe('color', () => {
        test('colorの初期値', () => {
          expect(wrapper.props().color).toBe('danger')
        })
        test('colorに代入', () => {
          wrapper.setProps({ color: 'primary' })
          expect(wrapper.props().color).toBe('primary')
        })
      })
      describe('message', () => {
        test('messageの初期値', () => {
          expect(wrapper.props().message).toBe('エラーが発生しました．')
        })
        test('messageに代入', () => {
          wrapper.setProps({ message: '変更テスト' })
          expect(wrapper.props().message).toBe('変更テスト')
        })
      })
    })
    describe('computed', () => {
      describe('isError', () => {
        test('error == true', () => {
          expect(wrapper.vm.isError).toBeTruthy()
        })
        test('error == false', () => {
          wrapper.setProps({ error: false })
          expect(wrapper.vm.isError).toBeFalsy()
        })
      })
    })
    describe('methods', () => {
      describe('close', () => {
        let mock
        beforeEach(() => {
          mock = jest.fn()
        })
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ close: mock })
          wrapper.vm.close()
          expect(mock).toBeCalled()
        })

        test('emitが執行されること', async done => {
          await wrapper.vm.close()
          expect(wrapper.emitted().close).toBeTruthy()
          done()
        })
      })
    })
  })
})
