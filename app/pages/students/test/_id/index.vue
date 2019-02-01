<template>
  <students-answer-form/>
</template>

<script>
import StudentsAnswerForm from '~/components/students/organisms/StudentsAnswerForm'
export default {
  components: { StudentsAnswerForm },
  layout: 'students/default',
  async asyncData({ store, route }) {
    const { id } = route.params
    await store.dispatch('students/questions/getRandomQuestions', {
      accessToken: store.getters['accessToken'],
      problemId: id
    })
  }
}
</script>
