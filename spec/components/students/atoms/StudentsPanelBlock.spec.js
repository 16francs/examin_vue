import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import StudentsPanelBlock from '~/components/students/atoms/StudentsPanelBlock'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/atoms/StudentsPanelBlock', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(StudentsPanelBlock, { localVue })
  })
  describe('template', () => {
    test('PanelBlockが存在するか', () => {
      expect(wrapper.contains('[data-test="panel-block"]')).toBeTruthy()
    })
  })
  describe('script', () => {
    describe('props', () => {
      describe('index', () => {
        test('indexの初期値', () => {
          expect(wrapper.props().index).toBe(1)
        })
        test('indexに代入', () => {
          wrapper.setProps({ index: 2 })
          expect(wrapper.props().index).toBe(2)
        })
      })
      describe('text', () => {
        test('textの初期値', () => {
          expect(wrapper.props().text).toBe('')
        })
        test('textに代入', () => {
          wrapper.setProps({ text: '変更テスト' })
          expect(wrapper.props().text).toBe('変更テスト')
        })
      })
    })
    describe('methods', () => {
      describe('select', () => {
        let mock
        beforeEach(() => {
          mock = jest.fn()
        })
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ select: mock })
          wrapper.vm.select()
          expect(mock).toBeCalled()
        })

        test('emitが実行されること', async done => {
          await wrapper.vm.select()
          expect(wrapper.emitted().select).toBeTruthy()
          done()
        })
      })
    })
  })
})
