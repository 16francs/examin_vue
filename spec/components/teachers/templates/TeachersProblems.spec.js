import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersProblems from '~/components/teachers/templates/TeachersProblems'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/templates/TeachersProblems', () => {
  let wrapper, content
  beforeEach(() => {
    wrapper = shallowMount(TeachersProblems, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('問題集作成ボタンが存在すること', () => {
      expect(wrapper.find(content('problem-new-button'))).toBeTruthy()
    })

    test('問題集検索フォームが存在すること', () => {
      expect(wrapper.find(content('problem-search'))).toBeTruthy()
    })

    test('問題集一覧が存在すること', () => {
      expect(wrapper.find(content('problem-list'))).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('data', () => {
      test('active', () => {
        expect(wrapper.vm.active).toBeFalsy()
      })
    })

    describe('methods', () => {
      describe('doNew', () => {
        test('正常に呼び出されること', () => {
          wrapper.vm.doNew()
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
