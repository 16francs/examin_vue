import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import * as Students from '~/store/students/students'
import axios from '~~/spec/helpers/axios'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('students/students', () => {
  let store
  let student
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(Students))
    student = {
      id: 1,
      login_id: '1og1n1d',
      name: '講師',
      school: '学校',
      role: 2,
      created_at: '2019-01-01T00:00:00+0900',
      updated_at: '2019-01-01T00:00:00+0900'
    }
  })

  afterEach(() => {
    store = null
  })

  describe('state', () => {
    test('studentの初期値が取得できること', () => {
      expect(store.state.student).toEqual({})
    })
  })

  describe('getters', () => {
    beforeEach(() => {
      store.replaceState({
        student: student
      })
    })

    test('studentが取得できること', () => {
      expect(store.getters['student']).toBe(student)
    })
  })

  describe('mutations', () => {
    let commit
    beforeEach(() => {
      commit = store.commit
    })

    test('setStudent', () => {
      commit('setStudent', { student: student })
      expect(store.state.student).toBe(student)
    })

    describe('actions', () => {
      let params
      beforeEach(() => {
        store.$axios = axios
      })

      afterEach(() => {
        params = null
      })

      describe('success', () => {
        beforeEach(() => {
          store.$axios.setSafetyMode(true)
        })

        test('getStudent', async () => {
          await store.dispatch('getStudent')
          expect(store.getters['student']).toEqual(student)
        })

        test('editStudent', async () => {
          params = {
            login_id: '1og1n1d',
            name: '講師',
            school: '学校'
          }
          await store.dispatch('editStudent', {
            user: params
          })
          expect(store.getters['student']).toEqual(student)
        })
      })

      describe('failure', () => {
        beforeEach(() => {
          store.$axios.setSafetyMode(false)
        })

        test('getStudent', async () => {
          await expect(store.dispatch('getStudent')).rejects.toEqual(
            new Error('Server Error')
          )
        })

        test('editStudent', async () => {
          params = { name: '', school: '', login_id: '' }
          params = { name: '', school: '', login_id: '' }
          await expect(
            store.dispatch('editStudent', { student: params })
          ).rejects.toEqual(new Error('Invalid Error'))
        })
      })
    })
  })
})
