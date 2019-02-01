import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TheNavbarBrand from '~/components/common/molecules/TheNavbarBrand'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/molecules/TheTheNavbarbarBrand', () => {
  let wrapper
  let content
  beforeEach(() => {
    wrapper = mount(TheNavbarBrand, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('navbar-brandが存在すること', () => {
      expect(wrapper.find(content('navbar-brand'))).toBeTruthy()
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
