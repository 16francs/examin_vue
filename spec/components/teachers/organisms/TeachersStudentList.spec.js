import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersStudentList from '~/components/teachers/organisms/TeachersStudentList'
import Module from '~~/spec/helpers/store'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/organisms/TeachersStudentList', () => {
  let wrapper, store
  let students
  beforeEach(() => {
    store = new Vuex.Store(Module)
    wrapper = shallowMount(TeachersStudentList, { localVue, store })

    students = [
      {
        id: 1,
        name: '講師',
        school: '16francs',
        role: 0
      }
    ]

    store.replaceState({
      teachers: { students: { students: students } }
    })
  })

  describe('script', () => {
    describe('computed', () => {
      describe('mapGetters', () => {
        test('store から students が取得できること', () => {
          expect(wrapper.vm.students).toEqual(students)
        })
      })
    })
  })
})
