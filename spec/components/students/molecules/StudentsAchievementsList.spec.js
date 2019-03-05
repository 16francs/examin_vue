import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import StudentsAchievementsList from '~/components/students/molecules/StudentsAchievementsList'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/molecules/StudentsAchievementsCard', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(StudentsAchievementsList, { localVue })
  })

  describe('template', () => {
    test('achievementsListが存在すること', () => {
      expect(wrapper.contains('[data-test="achievements-list"]')).toBeTruthy()
    })
  })
})
