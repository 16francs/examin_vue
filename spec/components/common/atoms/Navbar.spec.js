import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import Navbar from '~/components/common/atoms/Navbar'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/atoms/Navbar', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Navbar, { localVue })
  })
  describe('template', () => {
    test('ナビバーが存在すること', () => {
      expect(wrapper.contains('nav')).toBeTruthy()
    })
    test('ブランドロゴが存在すること', () => {
      const div = wrapper.findAll('div').at(0)
      expect(div.classes()).toContain('navbar-brand')
    })
  })
  describe('script', () => {
    describe('props', () => {
      describe('color', () => {
        test('colorの初期値', () => {
          expect(wrapper.props().color).toBe('primary')
        })
        test('colorに代入', () => {
          wrapper.setProps({ color: 'info' })
          expect(wrapper.props().color).toBe('info')
        })
      })
    })
    describe('computed', () => {
      describe('navbarColor', () => {
        test('color == null', () => {
          wrapper.setProps({ color: '' })
          expect(wrapper.vm.navbarColor).toBe('')
        })
        test('color != null', () => {
          wrapper.setProps({ color: 'primary' })
          expect(wrapper.vm.navbarColor).toBe('is-primary')
        })
      })
    })
  })
})
