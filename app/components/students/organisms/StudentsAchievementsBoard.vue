<template>
  <div>
    <students-achievements-card
      :answered-problem="answeredProblemsByUserFindById"
      :chart-data="chartData"
    >
      <students-achievements-list
        :achievements="achievements"
      />
    </students-achievements-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StudentsAchievementsCard from '~/components/students/molecules/StudentsAchievementsCard'
import StudentsAchievementsList from '~/components/students/molecules/StudentsAchievementsList'
export default {
  name: 'StudentsAchievementsCardList',
  components: { StudentsAchievementsCard, StudentsAchievementsList },
  computed: {
    ...mapGetters({
      achievements: 'students/achievements/achievements',
      answeredProblemsByUser: 'students/achievements/answeredProblemsByUser',
      chartData: 'students/achievements/chartData'
    }),
    answeredProblemsByUserFindById() {
      return this.answeredProblemsByUser.find(
        problem => problem.id == this.$route.params.id
      )
    }
  }
}
</script>

<style scoped>
</style>
