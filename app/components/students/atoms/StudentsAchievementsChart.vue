<script>
import { Doughnut } from 'vue-chartjs'

export default {
  name: 'StudentsAchievementsChart',
  extends: Doughnut,
  props: {
    chartData: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => {
        return {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>

<style scoped>
</style>
