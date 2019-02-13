import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersTeacherTableBody from '~/components/teachers/molecules/TeachersTeacherTableBody'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/molecules/TeachersTeacherTableBody', () => {
  let wrapper
  let teacher
  beforeEach(() => {
    wrapper = shallowMount(TeachersTeacherTableBody, { localVue })

    teacher = {
      name: '講師',
      school: '16francs',
      role: 1
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

      describe('teacher', () => {
        test('teacherの初期値', () => {
          expect(wrapper.props().teacher).toEqual({
            name: 'None',
            school: 'None',
            role: 1
          })
        })

        test('teacherに代入', () => {
          wrapper.setProps({ teacher: teacher })
          expect(wrapper.props().teacher).toEqual(teacher)
        })
      })
    })

    describe('computed', () => {
      describe('isAdmin', () => {
        test('teacher.role !===2', () => {
          expect(wrapper.vm.isAdmin).toBe('講師')
        })

        test('teacher.role === 2', () => {
          wrapper.setProps({ teacher: { role: 2 } })
          expect(wrapper.vm.isAdmin).toBe('管理者')
        })
      })
    })
  })
})
