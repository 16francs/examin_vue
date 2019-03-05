import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue } from '@vue/test-utils'
import StudentsAchievementsCard from '~/components/students/molecules/StudentsAchievementsCard'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/molecules/StudentsAchievementsCard', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(StudentsAchievementsCard, { localVue })
  })

  describe('template', () => {
    test('cardが存在すること', () => {
      expect(wrapper.contains('[data-test="card"]')).toBeTruthy()
    })
    describe('card', () => {
      test('headerが存在すること', () => {
        expect(wrapper.contains('[data-test="card-header"]')).toBeTruthy()
      })
      test('chartが存在すること', () => {
        // expect(wrapper.contains('[data-test="chart"]')).toBeTruthy()
      })
    })
  })
})
