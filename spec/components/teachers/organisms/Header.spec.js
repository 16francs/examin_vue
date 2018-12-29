import Vuex from 'vuex'
import Buefy from 'buefy'
import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Header from '~/components/teachers/organisms/Header'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)
localVue.use(VueRouter)

describe('components/teachers/organisms/Header', () => {
  let wrapper
  let router
  let content
  beforeEach(() => {
    router = new VueRouter()
    wrapper = shallowMount(Header, { localVue, router })
    content = id => `[data-test="${id}"]`
  })

  describe('script', () => {
    describe('data', () => {
      test('listが存在すること', () => {
        const list = [
          { label: 'ホーム', link: '/teachers' },
          { label: '問題集一覧', link: '/teachers/problems' },
          { label: '講師一覧', link: '/teachers/teachers' },
          { label: '生徒一覧', link: '/teachers/students' }
        ]
        expect(wrapper.vm.list).toEqual(list)
      })
    })

    describe('methods', () => {
      let mock
      beforeEach(() => {
        mock = jest.fn()
      })

      describe('doUserEdit', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ doUserEdit: mock })
          wrapper.vm.doUserEdit()
          expect(mock).toBeCalled()
        })

        test('routerが正常に実行されること', async done => {
          await wrapper.vm.doUserEdit()
          expect(wrapper.vm.$route.path).toBe('/teachers/edit')
          done()
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
    })
  })
})
