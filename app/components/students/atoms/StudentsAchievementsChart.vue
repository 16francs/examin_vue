<script>
import { Doughnut } from 'vue-chartjs'

export default {
  name: 'StudentsAchievementsChart',
  extends: Doughnut,
  props: {
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
