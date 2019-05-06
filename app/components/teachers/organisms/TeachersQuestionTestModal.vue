<template>
  <the-modal
    :active="active"
    data-test="test-modal"
    submit="作成する"
    title="テスト作成"
    @close="doClose"
    @submit="doSubmit"
  >
    <section class="modal-card-body">
      <the-alert
        :error="error"
        message="入力値に誤りがあります."
      />

      <teachers-test-form v-model="formData" />
    </section>
  </the-modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import dayjs from '~/plugins/dayjs'
import TeachersTestForm from '~/components/teachers/molecules/TeachersTestForm'
import TheAlert from '~/components/common/atoms/TheAlert'
import TheModal from '~/components/common/atoms/TheModal'

export default {
  components: {
    TeachersTestForm,
    TheAlert,
    TheModal
  },

  props: {
    active: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      error: false,
      formData: {
        count: '20'
      }
    }
  },

  computed: {
    ...mapGetters('teachers/questions', ['problem'])
  },

  methods: {
    doClose() {
      this.error = false
      this.$emit('close')
    },

    doSubmit() {
      this.$toast.open({
        message: 'テスト作成中...',
        type: 'is-info'
      })

      const { problem_id } = this.$route.params

      // テスト作成
      this.getTestFile({
        problem_id,
        test: this.formData
      })
        .then(response => {
          this.doClose()
          this.downloadTest(response)
        })
        .catch(() => {
          this.openAlert()
        })
    },

    downloadTest(response) {
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
        message: 'テストを作成しました',
        type: 'is-success'
      })
    },

    openAlert() {
      this.error = true
      setTimeout(() => {
        this.error = false
      }, 5000)
    },
    ...mapActions('teachers/problems', ['getTestFile'])
  }
}
</script>
