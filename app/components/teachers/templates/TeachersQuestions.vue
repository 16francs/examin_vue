<template>
  <div>
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
</template>

<script>
import TeachersNewButton from '~/components/teachers/molecules/TeachersNewButton'
import TeachersQuestionList from '~/components/teachers/organisms/TeachersQuestionList'

export default {
  components: {
    TeachersNewButton,
    TeachersQuestionList
  },

  methods: {
    doNew() {
      console.log('log:', 'new')
    }
  }
}
</script>

<style scoped>
.right {
  float: right;
}
</style>
