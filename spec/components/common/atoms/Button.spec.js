import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import Button from '~/components/common/atoms/Button'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/atoms/Button', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Button, { localVue })
  })

  describe('template', () => {
    test('ボタンが存在すること', () => {
      expect(wrapper.contains('button')).toBeTruthy()
    })

    describe('ボタンクリック', () => {
      let mock
      beforeEach(() => {
        mock = jest.fn()
      })

      test('ボタンクリックでhandleClickが呼ばれること', () => {
        wrapper.setMethods({ handleClick: mock })
        wrapper.find('button').trigger('click')
        expect(mock).toBeCalled()
      })
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

      describe('fullWidth', () => {
        test('fullWidthの初期値', () => {
          expect(wrapper.props().fullWidth).toBeFalsy()
        })

        test('fullWidthに代入', () => {
          wrapper.setProps({ fullWidth: true })
          expect(wrapper.props().fullWidth).toBeTruthy()
        })
      })

      describe('outlined', () => {
        test('outlinedの初期値', () => {
          expect(wrapper.props().outlined).toBeFalsy()
        })

        test('outlinedに代入', () => {
          wrapper.setProps({ outlined: true })
          expect(wrapper.props().outlined).toBeTruthy()
        })
      })

      describe('rounded', () => {
        test('roundedの初期値', () => {
          expect(wrapper.props().rounded).toBeFalsy()
        })

        test('roundedに代入', () => {
          wrapper.setProps({ rounded: true })
          expect(wrapper.props().rounded).toBeTruthy()
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
      describe('btnColor', () => {
        test('color == null', () => {
          expect(wrapper.vm.btnColor).toBe('')
        })

        test('color != null', () => {
          wrapper.setProps({ color: 'primary' })
          expect(wrapper.vm.btnColor).toBe('is-primary')
        })
      })

      describe('btnFullWidth', () => {
        test('fullWidth == false', () => {
          expect(wrapper.vm.btnFullWidth).toBe('')
        })

        test('fullWidth == true', () => {
          wrapper.setProps({ fullWidth: true })
          expect(wrapper.vm.btnFullWidth).toBe('is-fullwidth')
        })
      })

      describe('btnOutlined', () => {
        test('outlined == false', () => {
          expect(wrapper.vm.btnOutlined).toBe('')
        })

        test('outlined == true', () => {
          wrapper.setProps({ outlined: true })
          expect(wrapper.vm.btnOutlined).toBe('is-outlined')
        })
      })

      describe('btnRounded', () => {
        test('rounded == false', () => {
          expect(wrapper.vm.btnRounded).toBe('')
        })

        test('rounded == true', () => {
          wrapper.setProps({ rounded: true })
          expect(wrapper.vm.btnRounded).toBe('is-rounded')
        })
      })

      describe('btnSize', () => {
        test('size == null', () => {
          expect(wrapper.vm.btnSize).toBe('')
        })

        test('size != null', () => {
          wrapper.setProps({ size: 'small' })
          expect(wrapper.vm.btnSize).toBe('is-small')
        })
      })
    })

    describe('methods', () => {
      describe('handleClick', () => {
        let mock
        beforeEach(() => {
          mock = jest.fn()
        })

        test('正常に呼び出されること', () => {
          wrapper.setMethods({ handleClick: mock })
          wrapper.vm.handleClick()
          expect(mock).toBeCalled()
        })

        test('emitが実行されること', async done => {
          await wrapper.vm.handleClick()
          expect(wrapper.emitted().click).toBeTruthy()
          done()
        })
      })
    })
  })
})
