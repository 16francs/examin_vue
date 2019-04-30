<template>
  <div
    class="tile is-parent"
    data-test="questions-new"
  >
    <div class="tile is-child box">
      <teachers-questions-download />
    </div>

    <div class="tile is-child box">
      <teachers-questions-upload />
    </div>
  </div>
</template>

<script>
import TeachersQuestionsDownload from '~/components/teachers/molecules/TeachersQuestionsDownload'
import TeachersQuestionsUpload from '~/components/teachers/molecules/TeachersQuestionsUpload'

export default {
  components: {
    TeachersQuestionsDownload,
    TeachersQuestionsUpload
  }
}
</script>

<style scoped>
.title {
  font-size: 5vh;
}
</style>
