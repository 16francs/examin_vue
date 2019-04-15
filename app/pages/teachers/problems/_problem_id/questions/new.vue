<template>
  <div class="section">
    <teachers-question-new />
  </div>
</template>

<script>
import TeachersQuestionNew from '~/components/teachers/templates/TeachersQuestionNew'

export default {
  layout: 'teachers/default',

  components: {
    TeachersQuestionNew
  }
}
</script>
