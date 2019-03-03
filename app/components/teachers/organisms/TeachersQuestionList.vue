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
import { mapGetters } from 'vuex'
import TeachersQuestionTableBody from '~/components/teachers/molecules/TeachersQuestionTableBody'
import TeachersQuestionTableHeader from '~/components/teachers/molecules/TeachersQuestionTableHeader'
import TheTable from '~/components/common/atoms/TheTable'

export default {
  components: {
    TeachersQuestionTableBody,
    TeachersQuestionTableHeader,
    TheTable
  },

  computed: {
    ...mapGetters('teachers/questions', ['questions'])
  }
}
</script>
