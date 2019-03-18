import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import StudentsAchievementsList from '~/components/students/molecules/StudentsAchievementsList'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/molecules/StudentsAchievementsCard', () => {
  let wrapper
  let achievements
  beforeEach(() => {
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
    wrapper = mount(StudentsAchievementsList, { localVue })
  })

  describe('template', () => {
    test('achievementsListが存在すること', () => {
      expect(wrapper.contains('[data-test="achievements-list"]')).toBeTruthy()
    })
  })
  describe('script', () => {
    describe('achievements', () => {
      test('achievementsの初期値', () => {
        expect(wrapper.props().achievements).toEqual([])
      })
      test('achievementsに代入', () => {
        wrapper.setProps({ achievements: achievements })
        expect(wrapper.props().achievements).toEqual(achievements)
      })
    })
  })
})
