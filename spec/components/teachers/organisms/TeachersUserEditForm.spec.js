import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersUserEditForm from '~/components/teachers/organisms/TeachersUserEditForm'
import Module from '~~/spec/helpers/store'
import axios from '~~/spec/helpers/axios'
import { Toast } from 'buefy/dist/components/toast'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)
localVue.use(Toast)

describe('components/teachers/organisms/TeachersUserEditForm', () => {
  let wrapper, store
  let user
  beforeEach(() => {
    store = new Vuex.Store(Module)
    wrapper = shallowMount(TeachersUserEditForm, {
      localVue,
      store
    })

    user = {
      id: 1,
      login_id: '1og1n1d',
      name: '講師',
      school: '学校',
      role: 2,
      created_at: '2019-01-01T00:00:00+0900',
      updated_at: '2019-01-01T00:00:00+0900'
    }
  })

  afterEach(() => {
    store = null
  })

  describe('script', () => {
    describe('data', () => {
      test('error', () => {
        expect(wrapper.vm.error).toBeFalsy()
      })

      test('formData', () => {
        expect(wrapper.vm.formData).toEqual({
          name: 'None',
          school: 'None',
          login_id: ''
        })
      })
    })

    describe('methods', () => {
      beforeEach(() => {
        store.$axios = axios
      })

      describe('doSubmit', () => {
        describe('success', () => {
          beforeEach(() => {
            store.$axios.setSafetyMode(true)
          })

          test('正常に実行されること', async () => {
            await wrapper.vm.doSubmit()
            expect(store.getters['user']).toEqual(user)
          })
        })

        describe('failure', () => {
          beforeEach(() => {
            store.$axios.setSafetyMode(false)
          })

          test('正常に実行されること', async () => {
            await wrapper.vm.doSubmit()
            expect(store.getters['user']).toEqual({
              id: 0,
              login_id: '',
              name: 'None',
              school: 'None',
              role: 0,
              created_at: '',
              updated_at: ''
            })
          })
        })
      })

      test('openAlert', () => {
        jest.useFakeTimers()
        wrapper.vm.openAlert()
        expect(wrapper.vm.error).toBeTruthy()
        jest.runAllTimers()
        expect(wrapper.vm.error).toBeFalsy()
      })
    })
  })
})
