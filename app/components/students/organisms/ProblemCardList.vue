<template>
  <div>
    <div
      v-for="problem in problems"
      :key="problem.id"
    >
      <question-card
        :title="problem.title"
        :content="problem.content"
        @doLearn="doLearn(problem.id)"
        @doTest="doTest(problem.id)"
      />
    </div>
  </div>
</template>

<script>
import QuestionCard from '~/components/common/molecules/QuestionCard'
import { mapGetters } from 'vuex'
export default {
  name: 'QuestionCardList',
  components: { QuestionCard },
  // 問題集のデータをvuexから取得する
  computed: {
    ...mapGetters({
      problems: 'students/problems/problems'
    })
  },
  methods: {
    doLearn(problemId) {
      console.log(problemId)
      this.$router.push(`/students/problems/${problemId}`)
    },
    doTest(problemId) {
      console.log(problemId)
    }
  }
}
</script>
