import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TheTextField from '~/components/common/atoms/TheTextField'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/atoms/TheTextField', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TheTextField, { localVue })
  })
  describe('template', () => {
    test('fieldが存在すること', () => {
      const div = wrapper.findAll('div').at(0)
      expect(div.classes()).toContain('field')
    })
    test('ラベルが存在すること', () => {
      wrapper.setProps({ label: 'ラベル' })
      expect(wrapper.contains('label')).toBeTruthy()
    })
    test('Inputが存在すること', () => {
      expect(wrapper.contains('input')).toBeTruthy()
    })
    test('typeでpasswordが指定されたらiconが存在していること', () => {
      wrapper.setProps({ type: 'password' })
      expect(wrapper.contains('i')).toBeTruthy()
    })
  })
  describe('script', () => {
    describe('props', () => {
      describe('alert', () => {
        test('alertの初期値', () => {
          expect(wrapper.props().alert).toBe('')
        })
        test('alertに代入', () => {
          wrapper.setProps({ alert: 'primary' })
          expect(wrapper.props().alert).toBe('primary')
        })
      })
      describe('disabled', () => {
        test('disabledの初期値', () => {
          expect(wrapper.props().disabled).toBeFalsy()
        })
        test('disabledに代入', () => {
          wrapper.setProps({ disabled: true })
          expect(wrapper.props().disabled).toBeTruthy()
        })
      })
      describe('label', () => {
        test('labelの初期値', () => {
          expect(wrapper.props().label).toBe('')
        })
        test('labelに代入', () => {
          wrapper.setProps({ label: 'label' })
          expect(wrapper.props().label).toBe('label')
        })
      })
      describe('loading', () => {
        test('loadingの初期値', () => {
          expect(wrapper.props().loading).toBeFalsy()
        })
        test('loadingに代入', () => {
          wrapper.setProps({ loading: true })
          expect(wrapper.props().loading).toBeTruthy()
        })
      })
      describe('placeholder', () => {
        test('placeholderの初期値', () => {
          expect(wrapper.props().placeholder).toBe('')
        })
        test('placeholderに代入', () => {
          wrapper.setProps({ placeholder: 'id' })
          expect(wrapper.props().placeholder).toBe('id')
        })
      })
      describe('type', () => {
        test('typeの初期値', () => {
          expect(wrapper.props().type).toBe('text')
        })
        test('typeに代入', () => {
          wrapper.setProps({ type: 'password' })
          expect(wrapper.props().type).toBe('password')
        })
      })
      describe('value', () => {
        test('valueの初期値', () => {
          expect(wrapper.props().value).toBe('')
        })
        test('valueに代入', () => {
          wrapper.setProps({ value: 'qwerty' })
          expect(wrapper.props().value).toBe('qwerty')
        })
      })
    })
    // computedのテスト
    describe('computed', () => {
      describe('formData', () => {
        beforeEach(() => {
          wrapper.setProps({ value: 'test' })
        })
        test('inputイベントが正しく呼び出されるか', () => {
          expect(wrapper.emitted().input).toBeTruthy()
        })
        test('初期値がinputイベントにより渡されているか', () => {
          expect(wrapper.emitted().input[0]).toEqual(['test'])
        })
        test('valueが更新されたらinputイベントで更新されるか', () => {
          wrapper.setProps({ value: 'qwerty' })
          expect(wrapper.emitted().input[1]).toEqual(['qwerty'])
        })
      })
      describe('formSize', () => {
        test('size == null', () => {
          expect(wrapper.vm.formSize).toBe('')
        })
        test('size != null', () => {
          wrapper.setProps({ size: 'small' })
          expect(wrapper.vm.formSize).toBe('is-small')
        })
      })
      describe('labelAlert', () => {
        test('label == null', () => {
          expect(wrapper.vm.labelAlert).toBe('')
        })
        test('label != null', () => {
          wrapper.setProps({ alert: 'info' })
          expect(wrapper.vm.labelAlert).toBe('is-info')
        })
      })
      describe('isPassword', () => {
        test('type == password', () => {
          wrapper.setProps({ type: 'password' })
          expect(wrapper.vm.isPassword).toBeTruthy()
        })
        test('type != password', () => {
          expect(wrapper.vm.isPassword).toBeFalsy()
        })
      })
    })
  })
})
