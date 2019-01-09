<template>
  <div>
    <div
      v-for="problem in problems"
      :key="problem.id"
    >
      <problem-card
        :title="problem.title"
        :content="problem.content"
        @doLearn="doLearn(problem.id)"
        @doTest="doTest(problem.id, problem.title)"
      />
    </div>
  </div>
</template>

<script>
import ProblemCard from '~/components/common/molecules/ProblemCard'
import { mapGetters } from 'vuex'
export default {
  name: 'ProblemCardList',
  components: { ProblemCard },
  // 問題集のデータをvuexから取得する
  computed: {
    ...mapGetters({
      problems: 'students/problems/problems'
    })
  },
  methods: {
    doLearn(problemId) {
      this.$router.push(`students/problems/${problemId}`)
    },
    doTest(problemId, problemTitle) {
      this.$dialog.confirm({
        message: `<b>${problemTitle}</b>のテストを開始しますか？`,
        onConfirm: () => console.log(problemId)
      })
    }
  }
}
</script>
