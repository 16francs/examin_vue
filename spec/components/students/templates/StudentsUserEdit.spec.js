import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import StudentsUserEdit from '~/components/students/templates/StudentsUserEdit'
import Module from '~~/spec/helpers/store'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/templates/StudentsUserEdit', () => {
  let wrapper, store
  let student
  beforeEach(() => {
    store = new Vuex.Store(Module)
    student = {
      id: 1,
      login_id: '1og1n1d',
      name: '講師',
      school: '学校',
      role: 2,
      created_at: '2019-01-01T00:00:00+0900',
      updated_at: '2019-01-01T00:00:00+0900'
    }

    store.replaceState({
      students: {
        students: {
          student: student
        }
      }
    })

    wrapper = shallowMount(StudentsUserEdit, {
      localVue,
      store
    })
  })

  describe('data', () => {
    test('dataの初期値', () => {
      expect(wrapper.vm.isEditing).toBeFalsy()
    })
  })

  describe('method', () => {
    describe('showEditForm', () => {
      test('正常に実行されること', () => {
        wrapper.vm.showEditForm()
        expect(wrapper.vm.isEditing).toBeTruthy()
      })
    })

    describe('edit', () => {
      beforeEach(() => {
        wrapper.setData({ isEditing: true })
      })

      test('正常に実行されること', () => {
        wrapper.vm.edit()
        expect(wrapper.vm.isEditing).toBeFalsy()
      })
    })

    describe('cancel', () => {
      beforeEach(() => {
        wrapper.setData({ isEditing: true })
      })

      test('正常に実行されること', () => {
        wrapper.vm.cancel()
        expect(wrapper.vm.isEditing).toBeFalsy()
      })
    })
  })
})
