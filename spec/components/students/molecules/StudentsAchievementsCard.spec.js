import Vuex from 'vuex'
import Buefy from 'buefy'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import StudentsAchievementsCard from '~/components/students/molecules/StudentsAchievementsCard'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('components/students/molecules/StudentsAchievementsCard', () => {
  let wrapper
  let answeredProblem
  let chartData
  beforeEach(() => {
    answeredProblem = {
      created_at: '2000-11-11'
    }
    chartData = {
      chartData: {
        labels: ['type2'],
        datasets: [
          {
            backgroundColor: ['#d3d3d3'],
            data: [1]
          }
        ]
      }
    }
    wrapper = shallowMount(StudentsAchievementsCard, { localVue })
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
        expect(wrapper.contains('[data-test="chart"]')).toBeTruthy()
      })
    })
  })
  describe('script', () => {
    describe('props', () => {
      describe('answeredProblem', () => {
        test('answeredProblemの初期値', () => {
          expect(wrapper.props().answeredProblem).toEqual(answeredProblem)
        })
        test('answeredProblemに代入', () => {
          wrapper.setProps({
            answeredProblem: {
              created_at: '2000-12-31'
            }
          })
          expect(wrapper.props().answeredProblem).toEqual({
            created_at: '2000-12-31'
          })
        })
      })
      describe('chartData', () => {
        test('chartDataの初期値', () => {
          expect(wrapper.props().chartData).toEqual({
            labels: ['type1'],
            datasets: [
              {
                backgroundColor: ['#d3d3d3'],
                data: [10]
              }
            ]
          })
        })
        test('chartDataに代入', () => {
          wrapper.setProps({ chartData: chartData })
          expect(wrapper.props().chartData).toEqual(chartData)
        })
      })
    })
    describe('computed', () => {
      describe('formattedTitle', () => {
        test('formattedTitleの戻り値', () => {
          expect(wrapper.vm.formattedTitle).toBe('2000-11-11の記録')
        })
      })
    })
  })
})
