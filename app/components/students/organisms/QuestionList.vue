<template>
  <div>
    <Box
      v-for="question in questions"
      :key="question.id"
      :title="question.sentence"
      :content="question.correct"
    />
  </div>
</template>

<script>
import Box from '~/components/common/atoms/Box'
import { mapGetters } from 'vuex'
export default {
  name: 'QuestionList',
  components: { Box },
  computed: {
    ...mapGetters({
      questions: 'students/questions/questions'
    })
  }
}
</script>

<style scoped>
</style>
