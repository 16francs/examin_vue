<template>
  <div
    class="tile is-ancestor"
    data-test="question-new"
  >
    <div class="tile is-vertical">
      <div class="tile is-vertical box">
        <div class="tile is-parent">
          <div class="title">問題一括登録</div>
        </div>

        <teachers-questions-new-form />
      </div>

      <div class="tile is-vertical box">
        <div class="tile is-parent">
          <div class="title">問題登録</div>
        </div>
        
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

<style scoped>
.title {
  font-size: 5vh;
}
</style>
