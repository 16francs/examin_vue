import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TheTable from '~/components/common/atoms/TheTable'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/atoms/TheTable', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TheTable, { localVue })
  })

  describe('template', () => {
    test('テーブルが存在すること', () => {
      expect(wrapper.contains('table')).toBeTruthy()
    })

    test('theadが存在すること', () => {
      expect(wrapper.contains('thead')).toBeTruthy()
    })

    test('tfootが存在すること', () => {
      expect(wrapper.contains('tfoot')).toBeTruthy()
    })

    test('tbodyが存在すること', () => {
      expect(wrapper.contains('tbody')).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('isBordered', () => {
        test('isBorderedの初期値', () => {
          expect(wrapper.props().isBordered).toBeFalsy()
        })

        test('isBorderedに代入', () => {
          wrapper.setProps({ isBordered: true })
          expect(wrapper.props().isBordered).toBeTruthy()
        })
      })

      describe('isFullwidth', () => {
        test('isFullwidthの初期値', () => {
          expect(wrapper.props().isFullwidth).toBeTruthy()
        })

        test('isFullwidthに代入', () => {
          wrapper.setProps({ isFullwidth: false })
          expect(wrapper.props().isFullwidth).toBeFalsy()
        })
      })

      describe('isHoverable', () => {
        test('isHoverableの初期値', () => {
          expect(wrapper.props().isHoverable).toBeTruthy()
        })

        test('isHoverableに代入', () => {
          wrapper.setProps({ isHoverable: false })
          expect(wrapper.props().isHoverable).toBeFalsy()
        })
      })

      describe('isNarrow', () => {
        test('isNarrowの初期値', () => {
          expect(wrapper.props().isNarrow).toBeFalsy()
        })

        test('isNarrowに代入', () => {
          wrapper.setProps({ isNarrow: true })
          expect(wrapper.props().isNarrow).toBeTruthy()
        })
      })

      describe('isStriped', () => {
        test('isStripedの初期値', () => {
          expect(wrapper.props().isStriped).toBeTruthy()
        })

        test('isStripedに代入', () => {
          wrapper.setProps({ isStriped: false })
          expect(wrapper.props().isStriped).toBeFalsy()
        })
      })
    })

    describe('computed', () => {
      describe('bordered', () => {
        test('isBordered == false', () => {
          expect(wrapper.vm.bordered).toBe('')
        })

        test('isBordered == true', () => {
          wrapper.setProps({ isBordered: true })
          expect(wrapper.vm.bordered).toBe('is-bordered')
        })
      })

      describe('fullwidth', () => {
        test('isFullwidth == true', () => {
          expect(wrapper.vm.fullwidth).toBe('is-fullwidth')
        })

        test('isFullwidth == false', () => {
          wrapper.setProps({ isFullwidth: false })
          expect(wrapper.vm.fullwidth).toBe('')
        })
      })

      describe('hoverable', () => {
        test('isHoverable == true', () => {
          expect(wrapper.vm.hoverable).toBe('is-hoverable')
        })

        test('isHoverable == false', () => {
          wrapper.setProps({ isHoverable: false })
          expect(wrapper.vm.hoverable).toBe('')
        })
      })

      describe('narrow', () => {
        test('isNarrow == false', () => {
          expect(wrapper.vm.narrow).toBe('')
        })

        test('isNarrow == true', () => {
          wrapper.setProps({ isNarrow: true })
          expect(wrapper.vm.narrow).toBe('is-narrow')
        })
      })

      describe('striped', () => {
        test('isStriped == true', () => {
          expect(wrapper.vm.striped).toBe('is-striped')
        })

        test('isStriped == false', () => {
          wrapper.setProps({ isStriped: false })
          expect(wrapper.vm.striped).toBe('')
        })
      })
    })
  })
})
