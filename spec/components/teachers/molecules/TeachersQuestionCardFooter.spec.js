import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersQuestionCardFooter from '~/components/teachers/molecules/TeachersQuestionCardFooter'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/molecules/TeachersQuestionCardFooter', () => {
  let wrapper
  let content
  beforeEach(() => {
    wrapper = shallowMount(TeachersQuestionCardFooter, { localVue })
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

      describe('doQuestions', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ doQuestions: mock })
          wrapper.vm.doQuestions()
          expect(mock).toBeCalled()
        })

        test('emitが実行されること', async () => {
          await wrapper.vm.doQuestions()
          expect(wrapper.emitted().questions).toBeTruthy()
        })
      })

      describe('doTest', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ doTest: mock })
          wrapper.vm.doTest()
          expect(mock).toBeCalled()
        })

        test('emitが実行されること', async () => {
          await wrapper.vm.doTest()
          expect(wrapper.emitted().test).toBeTruthy()
        })
      })
    })
  })
})
