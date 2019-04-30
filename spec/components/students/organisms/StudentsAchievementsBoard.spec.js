import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import StudntsAchievementsBoard from '~/components/students/organisms/StudentsAchievementsBoard'
import Module from '~~/spec/helpers/store'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/organisms/StudentsAchievementsBoard', () => {
  let wrapper, store, $route, $router
  let achievements, answeredProblemsByUser
  beforeEach(() => {
    $route = {
      params: {
        problem_id: 1
      }
    }

    $router = {
      push: jest.fn()
    }

    achievements = [
      {
        id: 3,
        question_id: 1,
        result: false,
        user_choice: 1,
        question: {
          id: 1,
          sentence: 'improve',
          correct: '向上させる'
        }
      },
      {
        id: 4,
        question_id: 2,
        result: false,
        user_choice: 1,
        question: {
          id: 2,
          sentence: 'raise',
          correct: '〜を上げる'
        }
      }
    ]

    answeredProblemsByUser = [
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

    store = new Vuex.Store(Module)
    wrapper = shallowMount(StudntsAchievementsBoard, {
      localVue,
      mocks: {
        $route,
        $router
      },
      store
    })

    store.replaceState({
      students: {
        achievements: {
          achievements: achievements,
          answeredProblemsByUser: answeredProblemsByUser
        }
      }
    })
  })

  describe('script', () => {
    describe('computed', () => {
      describe('mapGetters', () => {
        test('storeからachievementsが取得できること', () => {
          expect(wrapper.vm.achievements).toEqual(achievements)
        })
      })
    })
  })
})
