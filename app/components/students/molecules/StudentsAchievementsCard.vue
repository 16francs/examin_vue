<template>
  <the-image-card>
    <students-achievements-chart/>
  </the-image-card>
</template>

<script>
import TheImageCard from '../../common/atoms/TheImageCard'
import StudentsAchievementsChart from '../atoms/StudentsAchievementsChart'
export default {
  name: 'StudentsAchievementsCard',
  components: { StudentsAchievementsChart, TheImageCard }
}
</script>

<style scoped>
</style>
