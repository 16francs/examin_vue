<template>
  <div data-test="question-list">
    <the-box
      v-for="question in questions"
      :key="question.id"
      :title="question.sentence"
      :content="question.correct"
      data-test="question-box"
    />
  </div>
</template>

<script>
import TheBox from '~/components/common/atoms/TheBox'
import { mapGetters } from 'vuex'

export default {
  components: { TheBox },
  computed: {
    ...mapGetters({
      questions: 'students/questions/questions'
    })
  }
}
</script>

<style scoped>
</style>
