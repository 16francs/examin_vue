<template>
  <the-card-hard
    data-test="card"
  >
    <the-card-header
      slot="header"
      :title="formattedTitle"
      data-test="card-header"
    />
    <students-achievements-chart
      :chart-data="chartData"
      data-test="chart"
    />
    <hr/>
    <slot/>
  </the-card-hard>
</template>

<script>
import StudentsAchievementsChart from '~/components/students/atoms/StudentsAchievementsChart'
import TheCardHard from '~/components/common/atoms/TheCardHard'
import TheCardHeader from '~/components/common/molecules/TheCardHeader'

export default {
  name: 'StudentsAchievementsCard',
  components: { TheCardHeader, TheCardHard, StudentsAchievementsChart },
  props: {
    answeredProblem: {
      type: Object,
      default: () => {
        return {
          created_at: '2000-11-11'
        }
      }
    },
    chartData: {
      type: Object,
      default: () => {
        return {
          labels: ['type1'],
          datasets: [
            {
              backgroundColor: ['#d3d3d3'],
              data: [10]
            }
          ]
        }
      }
    }
  },
  computed: {
    formattedTitle() {
      return this.answeredProblem.created_at + 'の記録'
    }
  }
}
</script>
