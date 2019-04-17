<template>
  <div class="question-form">
    <div class="tile is-parent">
      <div class="title">問題登録</div>

      <the-alert
        :error="error"
        message="入力値に誤りがあります．"
      />
    </div>

    <div class="tile is-parent">
      <div class="tile is-child box">
        <teachers-question-form v-model="question" />

        <teachers-submit-button @submit="doSubmit" />
      </div>
    </div>
  </div>
</template>

<script>
import TeachersQuestionForm from '~/components/teachers/molecules/TeachersQuestionForm'
import TeachersSubmitButton from '~/components/teachers/molecules/TeachersSubmitButton'
import TheAlert from '~/components/common/atoms/TheAlert'

export default {
  components: {
    TeachersQuestionForm,
    TeachersSubmitButton,
    TheAlert
  },

  data() {
    return {
      error: false,
      question: {
        sentence: '',
        correct: ''
      }
    }
  },

  methods: {
    doSubmit() {
      console.log('log:', 'create')
      console.log('log:', this.question)
    }
  }
}
</script>
