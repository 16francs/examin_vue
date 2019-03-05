import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TheBox from '~/components/common/atoms/TheBox'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/atoms/TheBox', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TheBox, { localVue })
  })
  describe('template', () => {
    test('boxが存在するか', () => {
      const div = wrapper.findAll('div').at(0)
      expect(div.classes()).toContain('box')
    })
    test('タイトルが存在すること', () => {
      expect(wrapper.contains('h1')).toBeTruthy()
    })
    test('コンテンツが存在すること', () => {
      expect(wrapper.contains('p')).toBeTruthy()
    })
  })
  describe('script', () => {
    describe('props', () => {
      describe('title', () => {
        test('titleの初期値', () => {
          expect(wrapper.props().title).toBe('テスト')
        })
        test('titleに代入', () => {
          wrapper.setProps({ title: '変更テスト' })
          expect(wrapper.props().title).toBe('変更テスト')
        })
      })
      describe('content', () => {
        test('contentの初期値', () => {
          expect(wrapper.props().content).toBe('')
        })
        test('contentの代入', () => {
          wrapper.setProps({ content: '変更テスト' })
          expect(wrapper.props().content).toBe('変更テスト')
        })
      })
      describe('color', () => {
        test('colorの初期値', () => {
          expect(wrapper.props().color).toBe('')
        })
        test('colorに代入', () => {
          wrapper.setProps({ color: 'primary' })
          expect(wrapper.props().color).toBe('primary')
        })
      })
      describe('backgroundColor', () => {
        test('backgroundColorの初期値', () => {
          expect(wrapper.props().backgroundColor).toBe('')
        })
        test('backgroundColorに代入', () => {
          wrapper.setProps({ backgroundColor: 'primary' })
          expect(wrapper.props().backgroundColor).toBe('primary')
        })
      })
    })
    describe('computed', () => {
      describe('textColor', () => {
        test('color == null', () => {
          expect(wrapper.vm.textColor).toBe('')
        })
        test('color != null', () => {
          wrapper.setProps({ color: 'primary' })
          expect(wrapper.vm.textColor).toBe('has-text-primary')
        })
      })
      describe('background', () => {
        test('backgroundColor == null', () => {
          expect(wrapper.vm.background).toBe('')
        })
        test('backgroundColor != null', () => {
          wrapper.setProps({ backgroundColor: 'primary' })
          expect(wrapper.vm.background).toBe('has-background-primary')
        })
      })
    })
  })
})
