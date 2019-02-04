import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TheTooltip from '~/components/common/atoms/TheTooltip'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/atoms/TheTooltip', () => {
  let wrapper
  let content
  beforeEach(() => {
    wrapper = mount(TheTooltip, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    beforeEach(() => {
      wrapper.setProps({ active: true })
    })

    test('tooltipが存在すること', () => {
      expect(wrapper.contains(content('tooltip'))).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('active', () => {
      test('activeの初期値', () => {
        expect(wrapper.props().active).toBeFalsy()
      })

      test('activeに代入', () => {
        wrapper.setProps({ active: true })
        expect(wrapper.props().active).toBeTruthy()
      })
    })

    describe('always', () => {
      test('alwaysの初期値', () => {
        expect(wrapper.props().always).toBeFalsy()
      })

      test('alwaysに代入', () => {
        wrapper.setProps({ always: true })
        expect(wrapper.props().always).toBeTruthy()
      })
    })

    describe('animated', () => {
      test('animatedの初期値', () => {
        expect(wrapper.props().animated).toBeFalsy()
      })

      test('animatedに代入', () => {
        wrapper.setProps({ animated: true })
        expect(wrapper.props().animated).toBeTruthy()
      })
    })

    describe('dashed', () => {
      test('dashedの初期値', () => {
        expect(wrapper.props().dashed).toBeFalsy()
      })

      test('dashedに代入', () => {
        wrapper.setProps({ dashed: true })
        expect(wrapper.props().dashed).toBeTruthy()
      })
    })

    describe('label', () => {
      test('labelの初期値', () => {
        expect(wrapper.props().label).toBe('')
      })

      test('labelに代入', () => {
        wrapper.setProps({ label: 'テスト' })
        expect(wrapper.props().label).toBe('テスト')
      })
    })

    describe('multilined', () => {
      test('multilinedの初期値', () => {
        expect(wrapper.props().multilined).toBeFalsy()
      })

      test('multilinedに代入', () => {
        wrapper.setProps({ multilined: true })
        expect(wrapper.props().multilined).toBeTruthy()
      })
    })

    describe('position', () => {
      test('positionの初期値', () => {
        expect(wrapper.props().position).toBe('top')
      })

      test('positionに代入', () => {
        wrapper.setProps({ position: 'bottom' })
        expect(wrapper.props().position).toBe('bottom')
      })
    })

    describe('size', () => {
      test('sizeの初期値', () => {
        expect(wrapper.props().size).toBe('medium')
      })

      test('sizeに代入', () => {
        wrapper.setProps({ size: 'small' })
        expect(wrapper.props().size).toBe('small')
      })
    })

    describe('square', () => {
      test('squareの初期値', () => {
        expect(wrapper.props().square).toBeFalsy()
      })

      test('squareに代入', () => {
        wrapper.setProps({ square: true })
        expect(wrapper.props().square).toBeTruthy()
      })
    })

    describe('type', () => {
      test('typeの初期値', () => {
        expect(wrapper.props().type).toBe('primary')
      })

      test('typeに代入', () => {
        wrapper.setProps({ type: 'info' })
        expect(wrapper.props().type).toBe('info')
      })
    })

    describe('computed', () => {
      test('tipPosition', () => {
        expect(wrapper.vm.tipPosition).toBe('is-top')
      })

      test('tipSize', () => {
        expect(wrapper.vm.tipSize).toBe('is-medium')
      })

      test('tipType', () => {
        expect(wrapper.vm.tipType).toBe('is-primary')
      })
    })
  })
})
