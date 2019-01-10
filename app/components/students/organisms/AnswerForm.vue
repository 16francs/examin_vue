<template>
  <section>
    <progress-bar
      value="70"
    />
    <select-list
      :answers="questions[1].answers"
    />
  </section>
</template>

<script>
import ProgressBar from '../../common/atoms/ProgressBar'
import SelectList from '../../common/molecules/SelectList'
import { mapGetters } from 'vuex'
export default {
  name: 'AnswerForm',
  components: { SelectList, ProgressBar },
  computed: {
    ...mapGetters({
      questions: 'students/questions/questions'
    })
  }
}
</script>

<style scoped>
</style>
