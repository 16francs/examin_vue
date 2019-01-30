<template>
  <div class="card">
    <ProblemCardHeader :title="problem.title" />

    <ProblemCardContent
      :content="problem.content"
      :teacher-name="problem.teacher_name"
      :updated-at="problem.updated_at" />

    <ProblemCardFooter />
  </div>
</template>

<script>
import ProblemCardContent from '~/components/teachers/molecules/ProblemCardContent'
import ProblemCardFooter from '~/components/teachers/molecules/ProblemCardFooter'
import ProblemCardHeader from '~/components/teachers/molecules/ProblemCardHeader'

export default {
  components: {
    ProblemCardContent,
    ProblemCardFooter,
    ProblemCardHeader
  },

  props: {
    problem: {
      type: Object,
      default: () => {
        return {
          id: 0,
          title: '',
          content: '',
          teacher_name: '',
          updated_at: ''
        }
      }
    }
  }
}
</script>
