import Vuex from 'vuex'
import Buefy from 'buefy'
import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import StudentsHeader from '~/components/students/organisms/StudentsHeader'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)
localVue.use(VueRouter)

describe('components/students/organisms/StudentsHeader', () => {
  let wrapper
  let router
  beforeEach(() => {
    router = new VueRouter()
    wrapper = shallowMount(StudentsHeader, { localVue, router })
  })

  describe('script', () => {
    describe('data', () => {
      test('listが存在すること', () => {
        const list = [
          { label: 'ホーム', link: '/students' },
          { label: 'テスト', link: '/students/test' }
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
          expect(wrapper.vm.$route.path).toBe('/students/edit')
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
