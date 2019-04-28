import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersTeachers from '~/components/teachers/templates/TeachersTeachers'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/templates/TeachersTeachers', () => {
  let wrapper, content
  beforeEach(() => {
    wrapper = shallowMount(TeachersTeachers, { localVue })
    content = id => `[data-test="${id}"]`
  })

  describe('template', () => {
    test('講師登録ボタンが存在すること', () => {
      expect(wrapper.find(content('teacher-new-button'))).toBeTruthy()
    })

    test('講師一覧が存在すること', () => {
      expect(wrapper.find(content('teacher-list'))).toBeTruthy()
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
