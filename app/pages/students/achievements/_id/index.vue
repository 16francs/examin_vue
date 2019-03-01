<template>
  <div class="hero-body">
    <students-answered-problem-card-list
      :answered-problems="answeredProblemsByUserFindByProblemsId"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StudentsAnsweredProblemCardList from '~/components/students/organisms/StudentsAnsweredProblemCardList'

export default {
  components: { StudentsAnsweredProblemCardList },
  layout: 'students/default',
  async asyncData({ store }) {
    await store.dispatch('students/achievements/getAnsweredProblemsByUser')
  },
  computed: {
    ...mapGetters({
      answeredProblemsByUser: 'students/achievements/answeredProblemsByUser'
    }),
    answeredProblemsByUserFindByProblemsId() {
      return this.answeredProblemsByUser.filter(
        problem => problem.problem_id == this.$route.params.id
      )
    }
  }
}
</script>

<style scoped>
</style>
