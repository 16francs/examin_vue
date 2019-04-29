<template>
  <div>
    <students-answered-problem-card
      v-for="answeredProblem in answeredProblemsByUserFindByProblemsId"
      :key="answeredProblem.id"
      :answered-problem="answeredProblem"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StudentsAnsweredProblemCard from '~/components/students/molecules/StudentsAnsweredProblemCard'

export default {
  name: 'StudentsAnsweredProblemCardList',
  components: { StudentsAnsweredProblemCard },
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
