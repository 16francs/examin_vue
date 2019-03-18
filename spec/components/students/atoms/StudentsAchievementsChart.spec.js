import Vue from 'vue'
import StudentsAchievementsChart from '~/components/students/atoms/StudentsAchievementsChart'

describe('components/students/atoms/StudentsAchievementsChart', () => {
  let el
  beforeEach(() => {
    el = document.createElement('div')
  })

  describe('canvas', () => {
    test('グラフが描画できること', () => {
      const vm = new Vue({
        render: function(createElement) {
          return createElement(StudentsAchievementsChart)
        }
      }).$mount(el)
      expect(vm.$el.querySelector('canvas')).toBeTruthy()
    })
  })
})
