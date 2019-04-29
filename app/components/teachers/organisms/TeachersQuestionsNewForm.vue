<template>
  <div
    class="questions-form"
    data-test="form-questions"
  >
    <div class="tile is-parent">
      <div class="title">問題一括登録</div>
    </div>

    <div class="tile is-parent">
      <div class="tile is-child box">
        <teachers-questions-download @download="doDownload" />
      </div>

      <div class="tile is-child box">
        <teachers-questions-upload
          :file-name="fileName"
          @upload="doUpload"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import dayjs from '~/plugins/dayjs'
import TeachersQuestionsDownload from '~/components/teachers/molecules/TeachersQuestionsDownload'
import TeachersQuestionsUpload from '~/components/teachers/molecules/TeachersQuestionsUpload'

export default {
  components: {
    TeachersQuestionsDownload,
    TeachersQuestionsUpload
  },

  data() {
    return {
      file: null
    }
  },

  computed: {
    fileName() {
      return this.file ? this.file.name : ''
    }
  },

  methods: {
    doDownload() {
      this.getTemplateFile()
        .then(response => {
          // API から取得したバイナリ値をもとに blob を作成
          const downloadFile = response.data
          const blob = new Blob([downloadFile], {
            type: 'application/vnd.ms-excel'
          })

          // ファイル名を定義
          const datetime = dayjs(Date.now()).format('YYYYMMDDHHmmss')
          const filename = `問題一括登録_${datetime}.xlsx`

          // ファイルのダウンロード
          // IE11 or not
          if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, filename)
            window.navigator.msSaveOrOpenBlob(blob, filename)
          } else {
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', filename)
            link.click()
          }

          this.$toast.open({
            message: '問題登録用のテンプレートをダウンロードしました.',
            type: 'is-info'
          })
        })
        .catch(error => {
          this.$toast.open({
            message: '問題登録用のテンプレートの取得に失敗しました.',
            type: 'is-danger'
          })
        })
    },
    doUpload({ file }) {
      this.$toast.open({
        message: 'アップロード中...',
        type: 'is-info'
      })

      this.file = file
      const { problem_id } = this.$route.params

      // 問題一括登録
      // FormDataを利用してFileをAPIに送る
      let formData = new FormData()
      formData.append('file', file)

      this.createProblems({ problem_id, formData })
        .then(() => {
          this.$router.push(`/teachers/problems/${problem_id}/questions`)
          this.$toast.open({
            message: '問題を登録しました.',
            type: 'is-success'
          })
        })
        .catch(() => {
          this.file = null
          this.$toast.open({
            message: '問題の登録に失敗しました.',
            type: 'is-danger'
          })
        })
    },
    ...mapActions('teachers/problems', ['getTemplateFile']),
    ...mapActions('teachers/questions', ['createQuestions'])
  }
}
</script>
