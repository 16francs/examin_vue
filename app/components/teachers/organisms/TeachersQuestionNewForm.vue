<template>
  <div class="question-form">
    <div class="tile is-parent">
      <div class="title">問題登録</div>
    </div>

    <div class="tile is-parent">
      <div class="tile is-child box">
        <the-alert
          :error="error"
          message="入力値に誤りがあります．"
        />

        <teachers-question-form v-model="question" />

        <teachers-submit-button @submit="doSubmit" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
      const { problem_id } = this.$route.params

      // 問題登録
      this.createQuestion({
        question: this.question,
        problem_id: problem_id
      })
        .then(() => {
          this.$router.push(`/teachers/problems/${problem_id}/questions`)
          this.$toast.open({
            message: '問題を登録しました.',
            type: 'is-success'
          })
        })
        .catch(() => {
          this.openAlert()
        })
    },

    openAlert() {
      this.error = true
      setTimeout(() => {
        this.error = false
      }, 5000)
    },
    ...mapActions('teachers/questions', ['createQuestion'])
  }
}
</script>
