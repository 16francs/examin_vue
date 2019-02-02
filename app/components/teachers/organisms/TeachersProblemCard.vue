<template>
  <div class="card">
    <teachers-problem-card-header :title="problem.title" />

    <teachers-problem-card-content
      :content="problem.content"
      :teacher-name="problem.teacher_name"
      :updated-at="problem.updated_at" />

    <teachers-problem-card-footer />
  </div>
</template>

<script>
import TeachersProblemCardContent from '~/components/teachers/molecules/TeachersProblemCardContent'
import TeachersProblemCardFooter from '~/components/teachers/molecules/TeachersProblemCardFooter'
import TeachersProblemCardHeader from '~/components/teachers/molecules/TeachersProblemCardHeader'

export default {
  components: {
    TeachersProblemCardContent,
    TeachersProblemCardFooter,
    TeachersProblemCardHeader
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
