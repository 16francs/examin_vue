<template>
  <section class="section">
    <progress-bar
      :value="limit"
    />
    <box
      :title="questions[number].sentence"
    />
    <select-list
      :answers="questions[number].answers"
    />
  </section>
</template>

<script>
import ProgressBar from '../../common/atoms/ProgressBar'
import SelectList from '../../common/molecules/SelectList'
import { mapGetters } from 'vuex'
import Box from '../../common/atoms/Box'
export default {
  name: 'AnswerForm',
  components: { Box, SelectList, ProgressBar },
  data() {
    return {
      limit: 100,
      number: 0,
      selects: []
    }
  },
  computed: {
    ...mapGetters({
      questions: 'students/questions/questions'
    })
  },
  mounted() {
    this.intervalID = setInterval(() => {
      if (this.limit === 0) {
        this.selects.push({
          question_id: this.questions[this.number].id,
          result: false,
          user_choice: -1,
          answer_time: -1
        })
        this.number++
        this.limit = 100
      }
      this.limit--
    }, 70)
  }
}
</script>

<style scoped>
</style>
