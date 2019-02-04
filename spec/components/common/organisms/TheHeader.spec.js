import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TheHeader from '~/components/common/organisms/TheHeader'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/organisms/TheHeader', () => {
  let wrapper
  let content
  beforeEach(() => {
    wrapper = mount(TheHeader, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('navbar-burgerが存在すること', () => {
      expect(wrapper.find(content('navbar-burger'))).toBeTruthy()
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

      describe('list', () => {
        test('listの初期値', () => {
          expect(wrapper.props().list).toEqual([])
        })

        test('listに代入', () => {
          const list = [{ label: 'ホーム', link: '/teachers' }]
          wrapper.setProps({ list: list })
          expect(wrapper.props().list).toEqual(list)
        })
      })
    })

    describe('data', () => {
      test('isActive', () => {
        expect(wrapper.vm.isActive).toBeFalsy()
      })
    })

    describe('methods', () => {
      let mock
      beforeEach(() => {
        mock = jest.fn()
      })

      describe('doClose', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ doClose: mock })
          wrapper.vm.doClose()
          expect(mock).toBeCalled()
        })

        test('isActiveがfalseになること', () => {
          wrapper.vm.doClose()
          expect(wrapper.vm.isActive).toBeFalsy()
        })
      })

      describe('doLogout', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ doLogout: mock })
          wrapper.vm.doLogout()
          expect(mock).toBeCalled()
        })

        test('emitが正常に実行されること', async done => {
          await wrapper.vm.doLogout()
          expect(wrapper.emitted().logout).toBeTruthy()
          done()
        })
      })

      describe('doUserEdit', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ doUserEdit: mock })
          wrapper.vm.doUserEdit()
          expect(mock).toBeCalled()
        })

        test('emitが正常に実行されること', async done => {
          await wrapper.vm.doUserEdit()
          expect(wrapper.emitted().userEdit).toBeTruthy()
          done()
        })
      })

      describe('handleToggle', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ handleToggle: mock })
          wrapper.vm.handleToggle()
          expect(mock).toBeCalled()
        })

        test('isActiveがに正常に更新されること', () => {
          const isActive = wrapper.vm.isActive
          wrapper.vm.handleToggle()
          expect(wrapper.vm.isActive).toBe(!isActive)
        })
      })
    })
  })
})
