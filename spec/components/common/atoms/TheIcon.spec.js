import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TheIcon from '~/components/common/atoms/TheIcon'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/atoms/TheIcon', () => {
  let wrapper
  let content
  beforeEach(() => {
    wrapper = mount(TheIcon, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('アイコンが存在すること', () => {
      expect(wrapper.contains(content('icon')))
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
          expect(wrapper.props().icon).toBe('home')
        })

        test('iconに代入', () => {
          wrapper.setProps({ icon: 'user' })
          expect(wrapper.props().icon).toBe('user')
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

      describe('iconSize', () => {
        test('size == null', () => {
          expect(wrapper.vm.iconSize).toBe('')
        })

        test('size != null', () => {
          wrapper.setProps({ size: 'small' })
          expect(wrapper.vm.iconSize).toBe('is-small')
        })
      })
      describe('iconSpin', () => {
        test('spin == true', () => {
          wrapper.setProps({ spin: true })
          expect(wrapper.vm.iconSpin).toBe('fa-spin')
        })
        test('spin != true', () => {
          expect(wrapper.vm.iconSpin).toBe('')
        })
      })
    })
  })
})
