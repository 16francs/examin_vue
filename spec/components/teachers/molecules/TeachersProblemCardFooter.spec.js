import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersProblemCardFooter from '~/components/teachers/molecules/TeachersProblemCardFooter'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/molecules/TeachersProblemCardFooter', () => {
  let wrapper
  let content
  beforeEach(() => {
    wrapper = shallowMount(TeachersProblemCardFooter, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('フッターが存在すること', () => {
      expect(wrapper.find(content('card-footer'))).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('methods', () => {
      let mock
      beforeEach(() => {
        mock = jest.fn()
      })

      describe('doShow', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ doShow: mock })
          wrapper.vm.doShow()
          expect(mock).toBeCalled()
        })

        test('emitが実行されること', async () => {
          await wrapper.vm.doShow()
          expect(wrapper.emitted().show).toBeTruthy()
        })
      })

      describe('doEdit', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ doEdit: mock })
          wrapper.vm.doEdit()
          expect(mock).toBeCalled()
        })

        test('emitが実行されること', async () => {
          await wrapper.vm.doEdit()
          expect(wrapper.emitted().edit).toBeTruthy()
        })
      })

      describe('doDelete', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ doDelete: mock })
          wrapper.vm.doDelete()
          expect(mock).toBeCalled()
        })

        test('emitが実行されること', async () => {
          await wrapper.vm.doDelete()
          expect(wrapper.emitted().delete).toBeTruthy()
        })
      })
    })
  })
})
