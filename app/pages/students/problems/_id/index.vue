<template>
  <section class="hero-body">
    <question-list/>
  </section>
</template>

<script>
import Box from '~/components/common/atoms/Box'
import QuestionList from '~/components/students/organisms/QuestionList'
export default {
  components: { QuestionList, Box },
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
