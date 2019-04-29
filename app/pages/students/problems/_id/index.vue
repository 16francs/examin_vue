<template>
  <section class="hero-body">
    <students-question-list/>
  </section>
</template>

<script>
import StudentsQuestionList from '~/components/students/organisms/StudentsQuestionList'
export default {
  components: { StudentsQuestionList },
  layout: 'students/default',
  async fetch({ store, route }) {
    const { id } = route.params
    await store
      .dispatch('students/questions/getQuestions', {
        problemId: id
      })
      .catch(() => {
        console.log('status:', '401')
      })
  }
}
</script>
