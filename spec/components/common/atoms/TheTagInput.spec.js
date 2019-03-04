import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TheTagInput from '~/components/common/atoms/TheTagInput'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/atoms/TheTagInput', () => {
  let wrapper, content
  beforeEach(() => {
    wrapper = mount(TheTagInput, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('タグフォームが存在すること', () => {
      expect(wrapper.contains(content('tag-input'))).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('allowNew', () => {
        test('allowNewの初期値', () => {
          expect(wrapper.props().allowNew).toBeFalsy()
        })

        test('allowNewに代入', () => {
          wrapper.setProps({ allowNew: true })
          expect(wrapper.props().allowNew).toBeTruthy()
        })
      })

      describe('attached', () => {
        test('attachedの初期値', () => {
          expect(wrapper.props().attached).toBeFalsy()
        })

        test('attachedに代入', () => {
          wrapper.setProps({ attached: true })
          expect(wrapper.props().attached).toBeTruthy()
        })
      })

      describe('autocomplete', () => {
        test('autocompleteの初期値', () => {
          expect(wrapper.props().autocomplete).toBeFalsy()
        })

        test('autocompleteに代入', () => {
          wrapper.setProps({ autocomplete: true })
          expect(wrapper.props().autocomplete).toBeTruthy()
        })
      })

      describe('closable', () => {
        test('closableの初期値', () => {
          expect(wrapper.props().closable).toBeTruthy()
        })

        test('closableに代入', () => {
          wrapper.setProps({ closable: false })
          expect(wrapper.props().closable).toBeFalsy()
        })
      })

      describe('ellipsis', () => {
        test('ellipsisの初期値', () => {
          expect(wrapper.props().ellipsis).toBeFalsy()
        })

        test('ellipsisに代入', () => {
          wrapper.setProps({ ellipsis: true })
          expect(wrapper.props().ellipsis).toBeTruthy()
        })
      })

      describe('label', () => {
        test('labelの初期値', () => {
          expect(wrapper.props().label).toBe('')
        })

        test('labelに代入', () => {
          wrapper.setProps({ label: 'ラベル' })
          expect(wrapper.props().label).toBe('ラベル')
        })
      })

      describe('labelType', () => {
        test('labelTypeの初期値', () => {
          expect(wrapper.props().labelType).toBe('')
        })

        test('labelTypeに代入', () => {
          wrapper.setProps({ labelType: 'success' })
          expect(wrapper.props().labelType).toBe('success')
        })
      })

      describe('maxlength', () => {
        test('maxlengthの初期値', () => {
          expect(wrapper.props().maxlength).toBe(15)
        })

        test('maxlengthに代入', () => {
          wrapper.setProps({ maxlength: 31 })
          expect(wrapper.props().maxlength).toBe(31)
        })
      })

      describe('maxtags', () => {
        test('maxtagsの初期値', () => {
          expect(wrapper.props().maxtags).toBe(7)
        })

        test('maxtagsに代入', () => {
          wrapper.setProps({ maxtags: 3 })
          expect(wrapper.props().maxtags).toBe(3)
        })
      })

      describe('placeholder', () => {
        test('placeholderの初期値', () => {
          expect(wrapper.props().placeholder).toBe('')
        })

        test('placeholderに代入', () => {
          wrapper.setProps({ placeholder: 'プレースホルダー' })
          expect(wrapper.props().placeholder).toBe('プレースホルダー')
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

      describe('type', () => {
        test('typeの初期値', () => {
          expect(wrapper.props().type).toBe('')
        })

        test('typeに代入', () => {
          wrapper.setProps({ type: 'primary' })
          expect(wrapper.props().type).toBe('primary')
        })
      })

      describe('value', () => {
        test('valueの初期値', () => {
          expect(wrapper.props().value).toEqual([])
        })

        test('valueに代入', () => {
          wrapper.setProps({ value: ['タグ'] })
          expect(wrapper.props().value).toEqual(['タグ'])
        })
      })
    })

    describe('computed', () => {
      describe('formSize', () => {
        test('size == null', () => {
          expect(wrapper.vm.formSize).toBe('')
        })

        test('size != null', () => {
          wrapper.setProps({ size: 'small' })
          expect(wrapper.vm.formSize).toBe('is-small')
        })
      })

      describe('labelColor', () => {
        test('labelType == null', () => {
          expect(wrapper.vm.labelColor).toBe('')
        })

        test('labelType != null', () => {
          wrapper.setProps({ labelType: 'success' })
          expect(wrapper.vm.labelColor).toBe('is-success')
        })
      })

      describe('tagType', () => {
        test('type == null', () => {
          expect(wrapper.vm.tagType).toBe('')
        })

        test('type != null', () => {
          wrapper.setProps({ type: 'primary' })
          expect(wrapper.vm.tagType).toBe('is-primary')
        })
      })
    })
  })
})
