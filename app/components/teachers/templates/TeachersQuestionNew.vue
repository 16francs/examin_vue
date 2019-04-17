<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical">
      <div class="tile is-vertical box">
        <teachers-questions-new-form />
      </div>

      <div class="tile is-vertical box">
        <teachers-question-new-form />
      </div>
    </div>
  </div>
</template>

<script>
import TeachersQuestionNewForm from '~/components/teachers/organisms/TeachersQuestionNewForm'
import TeachersQuestionsNewForm from '~/components/teachers/organisms/TeachersQuestionsNewForm'

export default {
  components: {
    TeachersQuestionNewForm,
    TeachersQuestionsNewForm
  }
}
</script>
