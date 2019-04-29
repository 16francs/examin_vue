import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersStudents from '~/components/teachers/templates/TeachersStudents'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/templates/TeachersStudents', () => {
  let wrapper, content
  beforeEach(() => {
    wrapper = shallowMount(TeachersStudents, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('生徒登録ボタンが存在すること', () => {
      expect(wrapper.find(content('student-new-button'))).toBeTruthy()
    })

    test('生徒一覧が存在すること', () => {
      expect(wrapper.find(content('student-list'))).toBeTruthy()
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
