import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersStudentTableBody from '~/components/teachers/molecules/TeachersStudentTableBody'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/molecules/TeachersStudentTableBody', () => {
  let wrapper
  let student
  beforeEach(() => {
    wrapper = shallowMount(TeachersStudentTableBody, { localVue })

    student = {
      name: '生徒',
      school: '16francs',
      login_id: 'test'
    }
  })

  describe('script', () => {
    describe('props', () => {
      describe('index', () => {
        test('indexの初期値', () => {
          expect(wrapper.props().index).toBe(0)
        })

        test('indexに代入', () => {
          wrapper.setProps({ index: 1 })
          expect(wrapper.props().index).toBe(1)
        })
      })

      describe('student', () => {
        test('studentの初期値', () => {
          expect(wrapper.props().student).toEqual({
            name: 'None',
            school: 'None',
            login_id: ''
          })
        })

        test('studentに代入', () => {
          wrapper.setProps({ student: student })
          expect(wrapper.props().student).toEqual(student)
        })
      })
    })
  })
})
