<template>
  <students-answer-form/>
</template>

<script>
import StudentsAnswerForm from '~/components/students/organisms/StudentsAnswerForm'
export default {
  components: { StudentsAnswerForm },
  layout: 'students/default',
  async fetch({ store, route }) {
    const { id } = route.params
    await store
      .dispatch('students/questions/getRandomQuestions', {
        problemId: id
      })
      .catch(() => {
        console.log('status:', '401')
      })
  }
}
</script>
