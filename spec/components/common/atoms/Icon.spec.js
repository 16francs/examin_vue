import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import Icon from '~/components/common/atoms/Icon'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('components/common/atoms/Icon', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Icon, { localVue })
  })

  describe('template', () => {
    test('アイコンが存在すること', () => {
      expect(wrapper.contains('i')).toBeTruthy()
      expect(wrapper.contains('.icon')).toBeTruthy()
      expect(wrapper.contains('.fas')).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('color', () => {
        test('colorの初期値', () => {
          expect(wrapper.props().color).toBe('')
        })

        test('colorに代入', () => {
          wrapper.setProps({ color: 'primary' })
          expect(wrapper.props().color).toBe('primary')
        })
      })

      describe('icon', () => {
        test('iconの初期値', () => {
          expect(wrapper.props().icon).toBe('')
        })

        test('iconに代入', () => {
          wrapper.setProps({ icon: 'home' })
          expect(wrapper.props().icon).toBe('home')
        })
      })

      describe('size', () => {
        test('sizeの初期値', () => {
          expect(wrapper.props().size).toBe('')
        })

        test('sizeに代入', () => {
          wrapper.setProps({ size: 'small' })
          expect(wrapper.props().size).toBe('small')
        })
      })
    })

    describe('computed', () => {
      describe('iconColor', () => {
        test('color == null', () => {
          expect(wrapper.vm.iconColor).toBe('')
        })

        test('color != null', () => {
          wrapper.setProps({ color: 'primary' })
          expect(wrapper.vm.iconColor).toBe('is-primary')
        })
      })

      describe('iconName', () => {
        test('icon == null', () => {
          expect(wrapper.vm.iconName).toBe('fa-spinner fa-pulse')
        })

        test('icon != null', () => {
          wrapper.setProps({ icon: 'home' })
          expect(wrapper.vm.iconName).toBe('fa-home')
        })
      })

      describe('iconSize', () => {
        test('size == null', () => {
          expect(wrapper.vm.iconSize).toBe('')
        })

        test('size != null', () => {
          wrapper.setProps({ size: 'small' })
          expect(wrapper.vm.iconSize).toBe('is-small')
        })
      })
    })
  })
})
