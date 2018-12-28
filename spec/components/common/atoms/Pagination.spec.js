import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import Pagination from '~/components/common/atoms/Pagination'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/atoms/Pagination', () => {
  let wrapper
  let content
  beforeEach(() => {
    wrapper = mount(Pagination, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    beforeEach(() => {
      wrapper.setProps({ total: 100 })
    })

    test('paginationが存在すること', () => {
      expect(wrapper.contains(content('pagination'))).toBeTruthy()
    })

    describe('currentページ', () => {
      test('初期表示', () => {
        expect(wrapper.find('.is-current').text()).toBe('1')
      })

      test('次のページに正常に切り替わること', () => {
        wrapper.find('.pagination-next').trigger('click')
        expect(wrapper.find('.is-current').text()).toBe('2')
      })
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('order', () => {
        test('orderの初期値', () => {
          expect(wrapper.props().order).toBe('')
        })

        test('orderに代入', () => {
          wrapper.setProps({ order: 'centered' })
          expect(wrapper.props().order).toBe('centered')
        })
      })

      describe('perPage', () => {
        test('perPageの初期値', () => {
          expect(wrapper.props().perPage).toBe(20)
        })

        test('perPageに代入', () => {
          wrapper.setProps({ perPage: 30 })
          expect(wrapper.props().perPage).toBe(30)
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

      describe('simple', () => {
        test('simpleの初期値', () => {
          expect(wrapper.props().simple).toBeFalsy()
        })

        test('simpleに代入', () => {
          wrapper.setProps({ simple: true })
          expect(wrapper.props().simple).toBeTruthy()
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

      describe('total', () => {
        test('totalの初期値', () => {
          expect(wrapper.props().total).toBe(0)
        })

        test('totalに代入', () => {
          wrapper.setProps({ total: 100 })
          expect(wrapper.props().total).toBe(100)
        })
      })
    })

    describe('data', () => {
      describe('current', () => {
        test('currentの初期値', () => {
          expect(wrapper.vm.current).toBe(1)
        })

        test('currentに代入', () => {
          wrapper.setData({ current: 2 })
          expect(wrapper.vm.current).toBe(2)
        })
      })
    })

    describe('computed', () => {
      describe('pgOrder', () => {
        test('order == null', () => {
          expect(wrapper.vm.pgOrder).toBe('')
        })

        test('order != null', () => {
          wrapper.setProps({ order: 'centered' })
          expect(wrapper.vm.pgOrder).toBe('is-centered')
        })
      })

      describe('pgSize', () => {
        test('size == null', () => {
          expect(wrapper.vm.pgSize).toBe('')
        })

        test('size != null', () => {
          wrapper.setProps({ size: 'small' })
          expect(wrapper.vm.pgSize).toBe('is-small')
        })
      })
    })
  })
})
