<template>
  <the-card-hard>
    <teachers-problem-card-header
      slot="header"
      :title="problem.title"
    />

    <teachers-problem-card-content
      :content="problem.content"
      :tags="problem.tags"
      :teacher-name="problem.teacher_name"
      :updated-at="problem.updated_at"
    />

    <teachers-problem-card-footer
      slot="footer"
      @show="doShow"
    />
  </the-card-hard>
</template>

<script>
import TeachersProblemCardContent from '~/components/teachers/molecules/TeachersProblemCardContent'
import TeachersProblemCardFooter from '~/components/teachers/molecules/TeachersProblemCardFooter'
import TeachersProblemCardHeader from '~/components/teachers/molecules/TeachersProblemCardHeader'
import TheCardHard from '~/components/common/atoms/TheCardHard'

export default {
  components: {
    TeachersProblemCardContent,
    TeachersProblemCardFooter,
    TeachersProblemCardHeader,
    TheCardHard
  },

  props: {
    problem: {
      type: Object,
      default: () => {
        return {
          id: 0,
          title: '',
          content: '',
          teacher_name: 'None',
          tags: [],
          updated_at: ''
        }
      }
    }
  },

  methods: {
    doShow() {
      this.$router.push(`/teachers/problems/${this.problem.id}/questions`)
    }
  }
}
</script>
