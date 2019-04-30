import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import StudentsUserEditForm from '~/components/students/organisms/StudentsUserEditForm'
import Module from '~~/spec/helpers/store'
import axios from '~~/spec/helpers/axios'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/organisms/StudentsUserEditForm', () => {
  let wrapper, store
  let student
  beforeEach(() => {
    store = new Vuex.Store(Module)
    wrapper = shallowMount(StudentsUserEditForm, {
      localVue,
      store
    })

    student = {
      id: 1,
      login_id: '1og1n1d',
      name: '講師',
      school: '学校',
      role: 2,
      created_at: '2019-01-01T00:00:00+0900',
      updated_at: '2019-01-01T00:00:00+0900'
    }

    store.replaceState({
      students: { students: { student: student } }
    })
  })

  afterEach(() => {
    store = null
  })

  describe('script', () => {
    describe('data', () => {
      test('formData', () => {
        expect(wrapper.vm.formData).toEqual({
          name: '',
          school: '',
          login_id: ''
        })
      })
      test('error', () => {
        expect(wrapper.vm.error).toBeFalsy()
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
            expect(store.getters['students/students/student']).toEqual(student)
          })
        })

        describe('failure', () => {
          beforeEach(() => {
            store.$axios.setSafetyMode(false)
          })

          test('errorがtrueになること', async () => {
            await wrapper.vm.doSubmit()
            expect(wrapper.vm.error).toBeTruthy()
          })
        })
      })

      describe('cancel', () => {
        let mock
        beforeEach(() => {
          mock = jest.fn()
        })
        test('正常に実行されること', () => {
          wrapper.setMethods({ cancel: mock })
          wrapper.vm.cancel()
          expect(mock).toBeCalled()
        })

        test('emitが実行されること', () => {
          wrapper.vm.cancel()
          expect(wrapper.emitted().cancel).toBeTruthy()
        })
      })
    })
  })
})
