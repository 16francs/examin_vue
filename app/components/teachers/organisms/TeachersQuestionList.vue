<template>
  <the-table>
    <teachers-question-table-header slot="header" />

    <teachers-question-table-body
      v-for="(question, index) in questions"
      :key="question.id"
      :index="index + 1"
      :question="question"
    />
  </the-table>
</template>
<script>
import TeachersQuestionTableBody from '~/components/teachers/molecules/TeachersQuestionTableBody'
import TeachersQuestionTableHeader from '~/components/teachers/molecules/TeachersQuestionTableHeader'
import TheTable from '~/components/common/atoms/TheTable'

export default {
  components: {
    TeachersQuestionTableBody,
    TeachersQuestionTableHeader,
    TheTable
  },

  data() {
    return {
      questions: [
        {
          id: 1,
          sentence: 'read',
          correct: '読む'
        },
        {
          id: 2,
          sentence: 'work',
          correct: '働く'
        },
        {
          id: 3,
          sentence: 'do',
          correct: 'する'
        }
      ]
    }
  }
}
</script>
