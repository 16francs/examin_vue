<template>
  <AnswerForm/>
</template>

<script>
import AnswerForm from '~/components/students/organisms/AnswerForm'
export default {
  components: { AnswerForm },
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
