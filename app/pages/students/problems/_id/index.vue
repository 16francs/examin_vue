<template>
  <section class="hero-body">
    <question-list/>
  </section>
</template>

<script>
import QuestionList from '~/components/students/organisms/QuestionList'
export default {
  components: { QuestionList },
  layout: 'students/default',
  async asyncData({ store, route }) {
    const { id } = route.params
    await store.dispatch('students/questions/getQuestions', {
      accessToken: store.getters['accessToken'],
      problemId: id
    })
  }
}
</script>
