import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import * as Teachers from '~/store/teachers/teachers'
import axios from '~~/spec/helpers/axios'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/teachers/problems', () => {
  let store
  let teachers
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(Teachers))

    teachers = [
      {
        id: 1,
        name: '講師',
        school: '16francs',
        role: 1
      }
    ]
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
    })
  })
})
