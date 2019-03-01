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

  async asyncData({ store, route }) {
    const { problem_id } = route.params
    await store
      .dispatch('teachers/questions/getQuestions', {
        problem_id: problem_id
      })
      .catch(response => {
        if (response.data.status === 401) {
          this.$emit('logout')
        }
      })
  }
}
</script>
