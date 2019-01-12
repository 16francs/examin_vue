<template>
  <section class="section">
    <progress-bar
      v-if="isTesting"
      :value="limit"
    />
    <box
      v-if="isTesting"
      :title="questions[number].sentence"
    />
    <select-list
      v-if="isTesting"
      :answers="questions[number].answers"
      @select="select"
    />
  </section>
</template>

<script>
import ProgressBar from '~/components/common/atoms/ProgressBar'
import SelectList from '~/components/students/molecules/SelectList'
import { mapGetters, mapActions } from 'vuex'
import Box from '~/components/common/atoms/Box'
export default {
  name: 'AnswerForm',
  components: { Box, SelectList, ProgressBar },
  data() {
    return {
      limit: 100,
      number: 0,
      selects: [],
      isTesting: true
    }
  },
  computed: {
    ...mapGetters({
      questions: 'students/questions/questions'
    })
  },
  watch: {
    number() {
      if (this.number === this.questions.length) {
        this.isTesting = false
        clearInterval(this.intervalID)
        console.log(JSON.stringify(this.selects))
        this.setTestResults({ results: this.selects })
        this.$router.push('/students/test/result')
      }
    }
  },
  // 制限時間の制御
  mounted() {
    this.intervalID = setInterval(() => {
      if (this.limit === 0) {
        this.selects.push({
          question_id: this.questions[this.number].id,
          result: false,
          user_choice: -1,
          answer_time: -1
        })
        if (this.number < this.questions.length) {
          this.number++
          this.limit = 100
        }
      }
      this.limit--
    }, 70)
  },
  methods: {
    // 生徒が回答を選んだとき
    select(selectNum) {
      const select = {
        question_id: this.questions[this.number].question_id,
        result: selectNum == this.questions[this.number].correct,
        user_choice: selectNum
      }
      this.selects.push(select)
      if (this.number < this.questions.length) {
        this.number++
        this.limit = 100
      }
      console.log(this.selects)
    },
    ...mapActions({
      setTestResults: 'students/achievements/setResults'
    })
  }
}
</script>

<style scoped>
</style>
