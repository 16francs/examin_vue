<template>
  <div v-if="isNothing">
    <the-alert
      color="light"
      message="問題集が未登録です．"
    />
  </div>
  <div
    v-else
    class="columns is-multiline"
  >
    <div
      v-for="problem in problems"
      :key="problem.id"
      class="column is-4"
    >
      <students-problem-card
        :title="problem.title"
        :content="problem.content"
        @doLearn="doLearn(problem.id)"
        @doTest="doTest(problem.id, problem.title)"
        @showAchievements="showAchievements(problem.id)"
      />
    </div>
  </div>
</template>

<script>
import StudentsProblemCard from '~/components/students/molecules/StudentsProblemCard'
import { mapGetters } from 'vuex'
import TheAlert from '~/components/common/atoms/TheAlert'

export default {
  components: { TheAlert, StudentsProblemCard },
  // 問題集のデータをvuexから取得する
  computed: {
    ...mapGetters({
      problems: 'students/problems/problems'
    }),
    isNothing() {
      return this.problems.length === 0
    }
  },
  methods: {
    doLearn(problemId) {
      this.$router.push(`/students/problems/${problemId}`)
    },
    doTest(problemId, problemTitle) {
      this.$dialog.confirm({
        message: `<b>${problemTitle}</b>のテストを開始しますか？`,
        onConfirm: () => this.$router.push(`/students/test/${problemId}`)
      })
    },
    showAchievements(problemId) {
      this.$router.push(`/students/achievements/${problemId}`)
    }
  }
}
</script>
