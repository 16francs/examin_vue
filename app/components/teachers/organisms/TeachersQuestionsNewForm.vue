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
        <teachers-questions-upload />
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
          console.log('error', error)
          this.$toast.open({
            message: '問題登録用のテンプレートの取得に失敗しました.',
            type: 'is-danger'
          })
        })
    },
    ...mapActions('teachers/problems', ['getTemplateFile'])
  }
}
</script>
