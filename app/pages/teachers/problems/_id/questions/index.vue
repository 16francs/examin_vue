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
  }
}
</script>
