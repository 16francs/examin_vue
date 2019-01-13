import Vuex from 'vuex'
import Buefy from 'buefy'
import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import * as Index from '~/store/index'
import axios from '~~/spec/helpers/axios'
import IndexPage from '~/pages/index'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)
localVue.use(VueRouter)

describe('pages/index', () => {
  let wrapper, router, store
  beforeEach(() => {
    router = new VueRouter()
    store = new Vuex.Store(cloneDeep(Index))
    wrapper = shallowMount(IndexPage, { localVue, router, store })
  })

  afterEach(() => {
    store = null
  })

  describe('script', () => {
    describe('data', () => {
      test('errorが存在すること', () => {
        expect(wrapper.vm.error).toBeFalsy()
      })
    })

    describe('computed', () => {
      test('storeからloginUserが取得できること', () => {
        expect(wrapper.vm.loginUser).toEqual({ id: 0, role: -1 })
      })
    })

    describe('methods', () => {
      let mock
      beforeEach(() => {
        mock = jest.fn()
        store.$axios = axios
      })

      describe('doLogin', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ doLogin: mock })
          wrapper.vm.doLogin()
          expect(mock).toBeCalled()
        })

        describe('doLoginが正常に実行されること', () => {
          let params
          beforeEach(() => {
            params = { login_id: 'test', password: 'test' }
          })

          test('success', async () => {
            store.$axios.setSafetyMode(true)
            await wrapper.vm.doLogin(params)
            expect(wrapper.vm.$route.path).toBe('/teachers')
          })

          test('failure', async () => {
            store.$axios.setSafetyMode(false)
            await wrapper.vm.doLogin(params)
            expect(wrapper.vm.error).toBeTruthy()
          })
        })
      })

      describe('close', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ close: mock })
          wrapper.vm.close()
          expect(mock).toBeCalled()
        })

        test('closeが正常に実行されること', async () => {
          await wrapper.vm.close()
          expect(wrapper.vm.error).toBeFalsy()
        })
      })
    })
  })
})
