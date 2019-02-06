import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersTeacherList from '~/components/teachers/organisms/TeachersTeacherList'
import Module from '~~/spec/helpers/store'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/organisms/TeachersTeacherList', () => {
  let wrapper, store
  let teachers
  beforeEach(() => {
    teachers = [
      {
        id: 1,
        name: '講師',
        school: '16francs',
        role: 1
      }
    ]

    store = new Vuex.Store(Module)
    wrapper = shallowMount(TeachersTeacherList, { localVue, store })

    store.replaceState({
      teachers: { teachers: { teachers: teachers } }
    })
  })

  describe('script', () => {
    describe('computed', () => {
      describe('mapGetters', () => {
        test('store から teachers が取得できること', () => {
          expect(wrapper.vm.teachers).toEqual(teachers)
        })
      })
    })
  })
})
