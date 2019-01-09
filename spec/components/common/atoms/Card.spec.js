import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import Card from '~/components/common/atoms/Card'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)
describe('components/common/atoms/Card', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Card, { localVue })
  })
  describe('template', () => {
    test('boxが存在するか', () => {
      const div = wrapper.findAll('div').at(0)
      expect(div.classes()).toContain('card')
    })
    test('タイトルが存在すること', () => {
      const p = wrapper.findAll('p').at(0)
      expect(p.classes()).toContain('card-header-title')
    })
    test('コンテンツが存在すること', () => {
      const div = wrapper.findAll('div').at(4)
      expect(div.classes()).toContain('card-content')
    })
  })
  describe('script', () => {
    describe('props', () => {
      describe('title', () => {
        test('titleの初期値', () => {
          expect(wrapper.props().title).toBe('タイトル')
        })
        test('titleに代入', () => {
          wrapper.setProps({ title: '変更テスト' })
          expect(wrapper.props().title).toBe('変更テスト')
        })
      })
      describe('content', () => {
        test('contentの初期値', () => {
          expect(wrapper.props().content).toBe('コンテンツ')
        })
        test('contentの代入', () => {
          wrapper.setProps({ content: '変更テスト' })
          expect(wrapper.props().content).toBe('変更テスト')
        })
      })
      describe('isOpen', () => {
        test('isOpenの初期値', () => {
          expect(wrapper.props().isOpen).toBeFalsy()
        })
        test('isOpenに代入', () => {
          wrapper.setProps({ isOpen: true })
          expect(wrapper.props().isOpen).toBeTruthy()
        })
      })
    })
    describe('computed', () => {
      describe('icon', () => {
        test('isOpen == true', () => {
          wrapper.setProps({ isOpen: true })
          expect(wrapper.vm.icon).toBe('menu-down')
        })
        test('isOpen == false', () => {
          wrapper.setProps({ isOpen: false })
          expect(wrapper.vm.icon).toBe('menu-up')
        })
      })
    })
  })
})
