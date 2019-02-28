<template>
  <div>
    <students-answered-problem-card
      v-for="answeredProblem in answeredProblems"
      :key="answeredProblem.id"
      :answered-problem="answeredProblem"
    />
  </div>
</template>

<script>
import StudentsAnsweredProblemCard from '~/components/students/molecules/StudentsAnsweredProblemCard'

export default {
  name: 'StudentsAnsweredProblemCardList',
  components: { StudentsAnsweredProblemCard },
  props: {
    answeredProblems: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
