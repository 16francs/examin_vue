import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import StudentsAnsweredProblemCardList from '~/components/students/organisms/StudentsAnsweredProblemCardList'
import Module from '~~/spec/helpers/store'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/organisms/StudentsAnsweredProblemCardList', () => {
  let wrapper, store, $route, $router
  let problems_users
  beforeEach(() => {
    problems_users = [
      {
        id: 1,
        problem_id: 1,
        created_at: '2018-11-11T09:00:00.000+09:00',
        updated_at: '2018-11-11T09:00:00.000+09:00'
      },
      {
        id: 2,
        problem_id: 1,
        created_at: '2019-02-20T00:31:14.000+09:00',
        updated_at: '2019-02-20T00:31:14.000+09:00'
      }
    ]

    $route = {
      params: {
        id: 1
      }
    }

    $router = {
      push: jest.fn()
    }

    store = new Vuex.Store(Module)

    wrapper = shallowMount(StudentsAnsweredProblemCardList, {
      localVue,
      store,
      mocks: {
        $route,
        $router
      }
    })

    store.replaceState({
      students: {
        achievements: {
          answeredProblemsByUser: problems_users
        }
      }
    })
  })

  describe('script', () => {
    describe('computed', () => {
      describe('mapGetters', () => {
        test('storeからansweredProblemsByUserが取得できること', () => {
          expect(wrapper.vm.answeredProblemsByUser).toEqual(problems_users)
        })
      })

      describe('answeredProblemsByUserFindByProblemsId', () => {
        test('answeredProblemsByUserからproblem_idでフィルタリングできること', () => {
          expect(wrapper.vm.answeredProblemsByUser).toEqual(problems_users)
        })
      })
    })

    describe('methods', () => {
      describe('click', () => {
        test('正常に呼び出されること', () => {
          wrapper.vm.click()
          expect(wrapper.vm.$router.push).toBeCalled()
        })
      })
    })
  })
})
