import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TeachersNewButton from '~/components/teachers/molecules/TeachersNewButton'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/molecules/TeachersNewButton', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TeachersNewButton, { localVue })
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

      test('ボタンクリックでhandleNewが呼ばれること', () => {
        wrapper.setMethods({ handleNew: mock })
        wrapper.find('button').trigger('click')
        expect(mock).toBeCalled()
      })
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('text', () => {
        test('textの初期値', () => {
          expect(wrapper.props().text).toBe('作成する')
        })

        test('textに代入', () => {
          wrapper.setProps({ text: '登録する' })
          expect(wrapper.props().text).toBe('登録する')
        })
      })
    })
  })

  describe('methods', () => {
    describe('handleNew', () => {
      let mock
      beforeEach(() => {
        mock = jest.fn()
      })

      test('正常に呼び出されること', () => {
        wrapper.setMethods({ handleNew: mock })
        wrapper.vm.handleNew()
        expect(mock).toBeCalled()
      })

      test('emitが実行されること', async () => {
        await wrapper.vm.handleNew()
        expect(wrapper.emitted().new).toBeTruthy()
      })
    })
  })
})
