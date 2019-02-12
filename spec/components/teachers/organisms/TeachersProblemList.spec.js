import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeachersProblemList from '~/components/teachers/organisms/TeachersProblemList'
import Module from '~~/spec/helpers/store'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/teachers/organisms/TeachersProblemList', () => {
  let wrapper, store
  let problems
  beforeEach(() => {
    problems = [
      {
        id: 1,
        title: 'タイトル',
        content: '内容',
        teacher_name: '講師',
        tags: ['タグ'],
        updated_at: '2019-01-01 00:00:00'
      }
    ]

    store = new Vuex.Store(Module)
    wrapper = shallowMount(TeachersProblemList, { localVue, store })

    store.replaceState({
      teachers: { problems: { problems: problems } }
    })
  })

  describe('script', () => {
    describe('computed', () => {
      describe('mapGetters', () => {
        test('store から problems が取得できること', () => {
          expect(wrapper.vm.problems).toEqual(problems)
        })
      })
    })
  })
})
