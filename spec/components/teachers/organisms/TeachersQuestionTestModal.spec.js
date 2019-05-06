import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersQuestionTestModal from '~/components/teachers/organisms/TeachersQuestionTestModal'
import Module from '~~/spec/helpers/store'
import axios from '~~/spec/helpers/axios'
import { Toast } from 'buefy/dist/components/toast'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)
localVue.use(Toast)

describe('components/teachers/organisms/TeachersQuestionTestModal', () => {
  let wrapper, content, store, $route
  beforeEach(() => {
    $route = {
      params: {
        problem_id: 1
      }
    }

    store = new Vuex.Store(Module)
    wrapper = shallowMount(TeachersQuestionTestModal, {
      localVue,
      store,
      mocks: {
        $route
      }
    })
    content = id => `[data-test="${id}]`
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

      test('formData', () => {
        expect(wrapper.vm.formData).toEqual({
          count: '20'
        })
      })
    })

    describe('methods', () => {
      let mock
      beforeEach(() => {
        store.$axios = axios
        mock = jest.fn()
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

          test('正常に実行されること', async done => {
            wrapper.setMethods({ doClose: mock })
            await wrapper.vm.doSubmit()
            expect(wrapper.vm.error).toBeFalsy()
            done()
            expect(mock).toBeCalled()
          })
        })

        describe('failure', () => {
          beforeEach(() => {
            store.$axios.setSafetyMode(false)
          })

          test('正常に実行されること', async done => {
            wrapper.setMethods({ openAlert: mock })
            await wrapper.vm.doSubmit()
            done()
            expect(mock).toBeCalled()
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
