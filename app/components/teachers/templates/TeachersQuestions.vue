<template>
  <div class="tile is-ancestor">
    <teachers-question-test-modal
      :active="active"
      @close="doClose"
    />

    <div class="tile is-vertical">
      <div class="tile is-vertical problem-detail">
        <teachers-question-card
          data-test="question-card"
          @test="doOpen"
        />
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
import TeachersQuestionTestModal from '~/components/teachers/organisms/TeachersQuestionTestModal'

export default {
  components: {
    TeachersNewButton,
    TeachersQuestionCard,
    TeachersQuestionList,
    TeachersQuestionTestModal
  },

  data() {
    return {
      active: false
    }
  },

  methods: {
    doNew() {
      const { problem_id } = this.$route.params
      this.$router.push(`/teachers/problems/${problem_id}/questions/new`)
    },

    doOpen() {
      this.active = true
    },

    doClose() {
      this.active = false
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
