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
    test('問題集検索フォームが存在すること', () => {
      expect(wrapper.find(content('teacher-new-button'))).toBeTruthy()
    })

    test('問題集一覧が存在すること', () => {
      expect(wrapper.find(content('teacher-list'))).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('methods', () => {
      let mock
      beforeEach(() => {
        mock = jest.fn()
      })

      describe('doNew', () => {
        test('正常に呼び出されること', () => {
          wrapper.setMethods({ doNew: mock })
          wrapper.vm.doNew()
          expect(mock).toBeCalled()
        })
      })
    })
  })
})
