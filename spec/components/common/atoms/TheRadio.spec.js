import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TheRadio from '~/components/common/atoms/TheRadio'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/atoms/TheRadio', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TheRadio, { localVue })
  })

  describe('script', () => {
    describe('props', () => {
      describe('name', () => {
        test('nameの初期値', () => {
          expect(wrapper.props().name).toBe('radio')
        })

        test('nameに代入', () => {
          wrapper.setProps({ name: 'name' })
          expect(wrapper.props().name).toBe('name')
        })
      })

      describe('select', () => {
        test('selectの初期値', () => {
          expect(wrapper.props().select).toBe('')
        })

        test('selectに代入', () => {
          wrapper.setProps({ select: 'select' })
          expect(wrapper.props().select).toBe('select')
        })
      })

      describe('value', () => {
        test('valueの初期値', () => {
          expect(wrapper.props().value).toBe('')
        })

        test('valueに代入', () => {
          wrapper.setProps({ value: 'value' })
          expect(wrapper.props().value).toBe('value')
        })
      })
    })

    describe('methods', () => {
      describe('doChange', () => {
        let mock
        beforeEach(() => {
          mock = jest.fn()
        })

        test('正常に呼び出されること', () => {
          wrapper.setMethods({ doChange: mock })
          wrapper.vm.doChange()
          expect(mock).toBeCalled()
        })

        test('emitが実行されること', async () => {
          await wrapper.vm.doChange()
          expect(wrapper.emitted().change).toBeTruthy()
        })
      })
    })
  })
})
