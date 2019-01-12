import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import PanelHardBlock from '~/components/students/atoms/PanelHardBlock'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/atoms/PanelHardBlock', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(PanelHardBlock, { localVue })
  })
  describe('template', () => {
    test('PanelBlockが存在するか', () => {
      const div = wrapper.findAll('span').at(0)
      expect(div.classes()).toContain('panel-block')
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
  })
})
