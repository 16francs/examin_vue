import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersStudentNewModal from '~/components/teachers/organisms/TeachersStudentNewModal'
import Module from '~~/spec/helpers/store'
import axios from '~~/spec/helpers/axios'
import { Toast } from 'buefy/dist/components/toast'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)
localVue.use(Toast)

describe('components/teachers/organisms/TeachersStudentNewModal', () => {
  let wrapper, content, store
  let student
  beforeEach(() => {
    store = new Vuex.Store(Module)
    wrapper = shallowMount(TeachersStudentNewModal, { localVue, store })
    content = id => `[data-test="${id}]`

    student = {
      id: 1,
      name: '生徒',
      school: '16francs',
      login_id: 'test',
      role: 0,
      created_at: '2019-01-01T00:00:00+0900',
      updated_at: '2019-01-01T00:00:00+0900'
    }
  })

  afterEach(() => {
    store = null
  })

  describe('template', () => {
    test('モーダルが存在すること', () => {
      expect(wrapper.find(content('new-modal'))).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('active', () => {
        test('activeの初期値', () => {
          expect(wrapper.props().active).toBeFalsy()
        })

        test('activeに代入', () => {
          wrapper.setProps({ active: true })
          expect(wrapper.props().active).toBeTruthy()
        })
      })
    })

    describe('data', () => {
      test('error', () => {
        expect(wrapper.vm.error).toBeFalsy()
      })

      test('student', () => {
        expect(wrapper.vm.student).toEqual({
          name: '',
          school: '',
          login_id: ''
        })
      })
    })

    describe('methods', () => {
      beforeEach(() => {
        store.$axios = axios
      })

      describe('doClose', () => {
        test('emitが正常に実行されること', async () => {
          await wrapper.vm.doClose()
          expect(wrapper.emitted().close).toBeTruthy()
        })

        test('error が false になること', () => {
          wrapper.setData({ error: true })
          wrapper.vm.doClose()
          expect(wrapper.vm.error).toBeFalsy()
        })
      })

      describe('doSubmit', () => {
        describe('success', () => {
          beforeEach(() => {
            store.$axios.setSafetyMode(true)
          })

          test('正常に実行されること', async () => {
            await wrapper.vm.doSubmit()
            expect(store.getters['teachers/students/students']).toEqual([
              student
            ])
          })
        })

        describe('failure', () => {
          beforeEach(() => {
            store.$axios.setSafetyMode(false)
          })

          test('正常に実行されること', async () => {
            await wrapper.vm.doSubmit()
            expect(store.getters['teachers/students/students']).toEqual([])
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
