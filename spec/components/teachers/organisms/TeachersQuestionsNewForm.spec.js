import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersQuestionsNewForm from '~/components/teachers/organisms/TeachersQuestionsNewForm'
import Module from '~~/spec/helpers/store'
import axios from '~~/spec/helpers/axios'
import { Toast } from 'buefy/dist/components/toast'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)
localVue.use(Toast)

describe('components/teachers/organisms/TeachersQuestionsNewForm', () => {
  let wrapper, store, content, $route
  let question
  beforeEach(() => {
    $route = {
      params: {
        problem_id: 1
      }
    }

    store = new Vuex.Store(Module)
    wrapper = shallowMount(TeachersQuestionsNewForm, {
      localVue,
      store,
      mocks: {
        $route
      }
    })
    content = id => `[data-test="${id}"`

    question = {
      id: 1,
      sentence: '問題',
      correct: '答え',
      created_at: '2019-01-01T00:00:00+0900',
      updated_at: '2019-01-01T00:00:00+0900'
    }
  })

  describe('template', () => {
    test('問題一括登録フォームが存在すること', () => {
      expect(wrapper.find(content('questions-new'))).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('data', () => {
      test('file', () => {
        expect(wrapper.vm.file).toBeNull()
      })
    })

    describe('computed', () => {
      describe('fileName', () => {
        test('file == null', () => {
          expect(wrapper.vm.fileName).toBe('')
        })

        test('file != null', () => {
          wrapper.setData({ file: { name: 'ファイル' } })
          expect(wrapper.vm.fileName).toBe('ファイル')
        })
      })
    })
  })
})
