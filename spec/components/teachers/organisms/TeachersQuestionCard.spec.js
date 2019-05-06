import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersQuestionCard from '~/components/teachers/organisms/TeachersQuestionCard'
import Module from '~~/spec/helpers/store'
import axios from '~~/spec/helpers/axios'
import { Toast } from 'buefy/dist/components/toast'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)
localVue.use(Toast)

describe('components/teachers/organisms/TeachersQuestionCard', () => {
  let wrapper, store, $route
  let problem
  beforeEach(() => {
    store = new Vuex.Store(Module)
    wrapper = shallowMount(TeachersQuestionCard, { localVue, store })

    problem = {
      id: 1,
      title: 'タイトル',
      content: '内容',
      teacher_name: '講師',
      tags: ['タグ'],
      updated_at: '2019-01-01 00:00:00'
    }

    store.replaceState({
      teachers: { questions: { problem: problem } }
    })
  })

  describe('script', () => {
    describe('computed', () => {
      describe('mapGetters', () => {
        test('storeからproblemが取得できること', () => {
          expect(wrapper.vm.problem).toEqual(problem)
        })
      })
    })

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
