<template>
  <div class="section">
    <teachers-questions />
  </div>
</template>

<script>
import TeachersQuestions from '~/components/teachers/templates/TeachersQuestions'

export default {
  layout: 'teachers/default',

  components: {
    TeachersQuestions
  },

  async fetch({ store, route }) {
    const { problem_id } = route.params
    await store
      .dispatch('teachers/questions/getQuestions', {
        problem_id: problem_id
      })
      .catch(() => {
        console.log('status:', '401')
      })
  }
}
</script>
