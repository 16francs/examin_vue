import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import * as Teachers from '~/store/teachers/teachers'
import axios from '~~/spec/helpers/axios'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/teachers/teachers', () => {
  let store
  let teacher, teachers
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(Teachers))

    teacher = {
      id: 1,
      name: '講師',
      school: '16francs',
      login_id: 'test',
      role: 1
    }
    teachers = [teacher]
  })

  afterEach(() => {
    store = null
  })

  describe('state', () => {
    test('teachersの初期値が取得できること', () => {
      expect(store.state.teachers).toEqual([])
    })
  })

  describe('getters', () => {
    beforeEach(() => {
      store.replaceState({
        teachers: teachers
      })
    })

    test('teachersが取得できること', () => {
      expect(store.getters['teachers']).toEqual(teachers)
    })
  })

  describe('mutations', () => {
    let commit
    beforeEach(() => {
      commit = store.commit
    })

    test('addTeacher', () => {
      commit('addTeacher', teacher)
      expect(store.state.teachers).toEqual(teachers)
    })

    test('setTeachers', () => {
      commit('setTeachers', { teachers: teachers })
      expect(store.state.teachers).toEqual(teachers)
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

      test('getTeachers', async () => {
        await store.dispatch('getTeachers')
        expect(store.getters['teachers']).toEqual(teachers)
      })

      test('createTeacher', async () => {
        teacher.created_at = '2019-01-01T00:00:00+0900'
        teacher.updated_at = '2019-01-01T00:00:00+0900'

        await store.dispatch('createTeacher', { teacher: teacher })
        expect(store.getters['teachers']).toEqual(teachers)
      })
    })

    describe('failure', () => {
      beforeEach(() => {
        store.$axios.setSafetyMode(false)
      })

      test('getTeachers', async () => {
        await expect(store.dispatch('getTeachers')).rejects.toEqual(
          new Error('Server Error')
        )
      })

      test('createTeacher', async () => {
        await expect(
          store.dispatch('createTeacher', { teacher: teacher })
        ).rejects.toEqual(new Error('Invalid Error'))
      })
    })
  })
})
