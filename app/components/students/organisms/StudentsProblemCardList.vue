<template>
  <div class="columns is-multiline">
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

export default {
  components: { StudentsProblemCard },
  // 問題集のデータをvuexから取得する
  computed: {
    ...mapGetters({
      problems: 'students/problems/problems'
    })
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
