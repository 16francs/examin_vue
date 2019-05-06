import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersQuestions from '~/components/teachers/templates/TeachersQuestions'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/templates/TeachersQuestions', () => {
  let wrapper, content, $route, $router
  beforeEach(() => {
    $route = {
      params: {
        problem_id: 1
      }
    }
    $router = {
      push: jest.fn()
    }

    wrapper = shallowMount(TeachersQuestions, {
      localVue,
      mocks: {
        $route,
        $router
      }
    })

    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('問題作成ボタンが存在すること', () => {
      expect(wrapper.find(content('question-new-button'))).toBeTruthy()
    })

    test('問題一覧が存在すること', () => {
      expect(wrapper.find(content('question-list'))).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('methods', () => {
      describe('doNew', () => {
        test('正常に呼び出されること', async () => {
          await wrapper.vm.doNew()
          expect(wrapper.vm.$router.push).toBeCalled()
        })
      })

      describe('doOpen', () => {
        test('正常に呼び出されること', () => {
          wrapper.vm.doOpen()
          expect(wrapper.vm.active).toBeTruthy()
        })
      })

      describe('doClose', () => {
        test('正常に呼び出されること', () => {
          wrapper.vm.doClose()
          expect(wrapper.vm.active).toBeFalsy()
        })
      })
    })
  })
})
