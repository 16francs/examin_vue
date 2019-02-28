<template>
  <the-card-hard>
    <the-card-header
      slot="header"
      :title="formattedTitle"
    />
    <StudentsAchievementsChart
      :chart-data="chartData"
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
      default() {
        return {
          created_at: ''
        }
      }
    },
    chartData: {
      type: Object,
      default: null
    }
  },
  computed: {
    formattedTitle() {
      return this.answeredProblem.created_at + 'の記録'
    }
  }
}
</script>

<style scoped>
</style>
