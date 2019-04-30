<template>
  <the-card-hard>
    <teachers-question-card-header
      slot="header"
      :title="problem.title"
    />

    <teachers-question-card-content
      :content="problem.content"
      :count="problem.count"
      :tags="problem.tags"
      :teacher-name="problem.teacher_name"
      :updated-at="problem.updated_at"
    />

    <teachers-question-card-footer slot="footer" />
  </the-card-hard> 
</template>

<script>
import { mapGetters } from 'vuex'
import TeachersQuestionCardContent from '~/components/teachers/molecules/TeachersQuestionCardContent'
import TeachersQuestionCardFooter from '~/components/teachers/molecules/TeachersQuestionCardFooter'
import TeachersQuestionCardHeader from '~/components/teachers/molecules/TeachersQuestionCardHeader'
import TheCardHard from '~/components/common/atoms/TheCardHard'

export default {
  components: {
    TeachersQuestionCardContent,
    TeachersQuestionCardFooter,
    TeachersQuestionCardHeader,
    TheCardHard
  },

  computed: {
    ...mapGetters('teachers/questions', ['problem'])
  }
}
</script>
