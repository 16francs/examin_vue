import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import * as Students from '~/store/teachers/students'
import axios from '~~/spec/helpers/axios'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/teachers/students', () => {
  let store
  let student, students
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(Students))

    student = {
      id: 1,
      name: '生徒',
      school: '16francs',
      login_id: 'test',
      role: 0
    }
    students = [student]
  })

  afterEach(() => {
    store = null
  })

  describe('state', () => {
    test('studentsの初期値が取得できること', () => {
      expect(store.state.students).toEqual([])
    })
  })

  describe('getters', () => {
    beforeEach(() => {
      store.replaceState({
        students: students
      })
    })

    test('studentsが取得できること', () => {
      expect(store.getters['students']).toEqual(students)
    })
  })

  describe('mutations', () => {
    let commit
    beforeEach(() => {
      commit = store.commit
    })

    test('addStudent', () => {
      commit('addStudent', student)
      expect(store.state.students).toEqual(students)
    })

    test('setStudents', () => {
      commit('setStudents', { students: students })
      expect(store.state.students).toEqual(students)
    })
  })

  describe('actions', () => {
    beforeEach(() => {
      store.$axios = axios
    })

    describe('success', () => {
      beforeEach(() => {
        store.$axios.setSafetyMode(true)
      })

      test('getStudents', async () => {
        await store.dispatch('getStudents')
        expect(store.getters['students']).toEqual(students)
      })

      test('createStudent', async () => {
        student.created_at = '2019-01-01T00:00:00+0900'
        student.updated_at = '2019-01-01T00:00:00+0900'

        await store.dispatch('createStudent', { student: student })
        expect(store.getters['students']).toEqual(students)
      })
    })

    describe('failure', () => {
      beforeEach(() => {
        store.$axios.setSafetyMode(false)
      })

      test('getStudents', async () => {
        await expect(store.dispatch('getStudents')).rejects.toEqual(
          new Error('Server Error')
        )
      })

      test('createStudent', async () => {
        await expect(
          store.dispatch('createStudent', { student: student })
        ).rejects.toEqual(new Error('Invalid Error'))
      })
    })
  })
})
