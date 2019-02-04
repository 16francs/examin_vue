import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import TheNavbarMenu from '~/components/common/molecules/TheNavbarMenu'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/common/molecules/TheNavbarMenu', () => {
  let wrapper
  let content
  beforeEach(() => {
    wrapper = mount(TheNavbarMenu, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    describe('ボタン', () => {
      test('設定ボタンが存在すること', () => {
        expect(wrapper.find(content('userEdit'))).toBeTruthy()
      })

      test('Logoutボタンが存在すること', () => {
        expect(wrapper.find(content('logout'))).toBeTruthy()
      })
    })

    describe('ボタンクリック', () => {
      let mock
      beforeEach(() => {
        mock = jest.fn()
      })

      test('設定ボタンをクリックでhandleUserEditが呼ばれること', () => {
        wrapper.setMethods({ handleUserEdit: mock })
        wrapper.find(content('userEdit')).trigger('click')
        expect(mock).toBeCalled()
      })

      test('logoutボタンをクリックでhandleLogoutが呼ばれること', () => {
        wrapper.setMethods({ handleLogout: mock })
        wrapper.find(content('logout')).trigger('click')
        expect(mock).toBeCalled()
      })
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('list', () => {
        test('listの初期値', () => {
          expect(wrapper.props().list).toEqual([])
        })

        test('listに代入', () => {
          const item1 = { label: 'ホーム', link: '/' }
          const item2 = { label: '講師', link: '/teachers' }
          const item3 = { label: '生徒', link: '/students' }
          const list = [item1, item2, item3]

          wrapper.setProps({ list: list })
          expect(wrapper.props().list).toEqual(list)
        })
      })
    })

    describe('methods', () => {
      let mock
      beforeEach(() => {
        mock = jest.fn()
      })

      describe('handleClick', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ handleClick: mock })
          wrapper.vm.handleClick()
          expect(mock).toBeCalled()
        })

        test('emitが正常に実行されること', async done => {
          await wrapper.vm.handleClick()
          expect(wrapper.emitted().close).toBeTruthy()
          done()
        })
      })

      describe('handleUserEdit', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ handleUserEdit: mock })
          wrapper.vm.handleUserEdit()
          expect(mock).toBeCalled()
        })

        test('emitが正常に実行されること', async done => {
          await wrapper.vm.handleUserEdit()
          expect(wrapper.emitted().userEdit).toBeTruthy()
          done()
        })
      })

      describe('handleLogout', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ handleLogout: mock })
          wrapper.vm.handleLogout()
          expect(mock).toBeCalled()
        })

        test('emitが正常に実行されること', async done => {
          await wrapper.vm.handleLogout()
          expect(wrapper.emitted().logout).toBeTruthy()
          done()
        })
      })
    })
  })
})
