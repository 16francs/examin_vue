<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical">
      <div class="tile is-vertical problem-detail">
        <teachers-question-card data-test="question-card" />
      </div>

      <div class="tile is-vertical box">
        <div class="title">
          <span>問題一覧</span>

          <teachers-new-button
            class="right"
            data-test="question-new-button"
            @new="doNew"
          />
        </div>

        <teachers-question-list data-test="question-list" />
      </div>
    </div>
  </div>
</template>

<script>
import TeachersNewButton from '~/components/teachers/molecules/TeachersNewButton'
import TeachersQuestionCard from '~/components/teachers/organisms/TeachersQuestionCard'
import TeachersQuestionList from '~/components/teachers/organisms/TeachersQuestionList'

export default {
  components: {
    TeachersNewButton,
    TeachersQuestionCard,
    TeachersQuestionList
  },

  methods: {
    doNew() {
      const { problem_id } = this.$route.params
      this.$router.push(`/teachers/problems/${problem_id}/questions/new`)
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 5vh;
}
.title .right {
  float: right;
}
.problem-detail {
  margin-bottom: 5vh;
}
</style>
