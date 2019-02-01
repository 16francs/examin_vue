import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TheNavbar from '~/components/common/atoms/TheNavbar'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/atoms/TheNavbar', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TheNavbar, { localVue })
  })

  describe('template', () => {
    test('ナビバーが存在すること', () => {
      expect(wrapper.contains('nav')).toBeTruthy()
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
      describe('theNavbarColor', () => {
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
