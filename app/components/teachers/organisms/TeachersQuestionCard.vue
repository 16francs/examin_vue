<template>
  <the-card-hard>
    <teachers-question-card-header
      slot="header"
      :title="problem.title"
    />

    <teachers-question-card-content
      :content="problem.content"
      :count="problem.count"
      :tags="problem.tags"
      :teacher-name="problem.teacher_name"
      :updated-at="problem.updated_at"
    />

    <teachers-question-card-footer
      slot="footer"
      @questions="doQuestions"
      @test="doTest"
    />
  </the-card-hard> 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import dayjs from '~/plugins/dayjs'
import TeachersQuestionCardContent from '~/components/teachers/molecules/TeachersQuestionCardContent'
import TeachersQuestionCardFooter from '~/components/teachers/molecules/TeachersQuestionCardFooter'
import TeachersQuestionCardHeader from '~/components/teachers/molecules/TeachersQuestionCardHeader'
import TheCardHard from '~/components/common/atoms/TheCardHard'

export default {
  components: {
    TeachersQuestionCardContent,
    TeachersQuestionCardFooter,
    TeachersQuestionCardHeader,
    TheCardHard
  },

  computed: {
    ...mapGetters('teachers/questions', ['problem'])
  },

  methods: {
    doQuestions() {
      const { problem_id } = this.$route.params

      this.getProblemFile({ problem_id })
        .then(response => {
          // API から取得したバイナリ値をもとに blob を作成
          const downloadFile = response.data
          const blob = new Blob([downloadFile], {
            type: 'application/vnd.ms-excel'
          })

          // ファイル名を定義
          const datetime = dayjs(Date.now()).format('YYYYMMDDHHmmss')
          const { title } = this.problem
          const filename = `${title}_${datetime}.xlsx`

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
            message: '問題集をダウンロードしました.',
            type: 'is-info'
          })
        })
        .catch(error => {
          this.$toast.open({
            message: '問題集の取得に失敗しました.',
            type: 'is-danger'
          })
        })
    },

    doTest() {
      this.$emit('test')
    },
    ...mapActions('teachers/problems', ['getProblemFile'])
  }
}
</script>
