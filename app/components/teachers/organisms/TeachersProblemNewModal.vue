<template>
  <the-modal
    :active="active"
    data-test="new-modal"
    submit="作成する"
    title="問題集作成"
    @close="doClose"
    @submit="doSubmit"
  >
    <section class="modal-card-body">
      <the-alert
        :error="error"
        message="入力値に誤りがあります．"
      />

      <teachers-problem-form v-model="problem" />
    </section>
  </the-modal>
</template>

<script>
import { mapActions } from 'vuex'
import TeachersProblemForm from '~/components/teachers/molecules/TeachersProblemForm'
import TheAlert from '~/components/common/atoms/TheAlert'
import TheModal from '~/components/common/atoms/TheModal'

export default {
  components: {
    TeachersProblemForm,
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
      problem: {
        title: '',
        content: '',
        tags: []
      }
    }
  },

  methods: {
    doClose() {
      this.error = false
      this.$emit('close')
    },

    doSubmit() {
      // 問題登録
      this.createProblem({
        problem: this.problem
      })
        .then(() => {
          this.doClose()
          this.$toast.open({
            message: '問題集を登録しました.',
            type: 'is-success'
          })
        })
        .catch(() => {
          this.openAlert()
        })
    },

    openAlert() {
      this.error = true
      setTimeout(() => {
        this.error = false
      }, 5000)
    },
    ...mapActions('teachers/problems', ['createProblem'])
  }
}
</script>
