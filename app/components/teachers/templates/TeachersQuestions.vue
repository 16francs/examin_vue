<template>
  <div>
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
</template>

<script>
import TeachersNewButton from '~/components/teachers/molecules/TeachersNewButton'
import TeachersQuestionList from '~/components/teachers/organisms/TeachersQuestionList'

export default {
  components: {
    TeachersNewButton,
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
</style>
