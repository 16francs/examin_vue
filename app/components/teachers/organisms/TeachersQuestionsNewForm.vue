<template>
  <div class="questions-form">
    <div class="tile is-parent">
      <div class="title">問題一括登録</div>
    </div>

    <div class="tile is-parent">
      <div class="tile is-child box">
        <teachers-questions-download />
      </div>

      <div class="tile is-child box">
        <teachers-questions-upload v-model="file" />
      </div>
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
  },

  data() {
    return {
      file: {
        name: ''
      }
    }
  }
}
</script>
