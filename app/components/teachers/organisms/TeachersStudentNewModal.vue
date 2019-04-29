<template>
  <the-modal
    :active="active"
    data-test="new-modal"
    submit="登録する"
    title="生徒登録"
    @close="doClose"
    @submit="doSubmit"
  >
    <section class="modal-card-body">
      <the-alert
        :error="error"
        message="入力値に誤りがあります."
      />

      <teachers-user-form v-model="student" />
    </section>
  </the-modal>
</template>

<script>
import { mapActions } from 'vuex'
import TeachersUserForm from '~/components/teachers/molecules/TeachersUserForm'
import TheAlert from '~/components/common/atoms/TheAlert'
import TheModal from '~/components/common/atoms/TheModal'

export default {
  components: {
    TeachersUserForm,
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
      student: {
        name: '',
        school: '',
        login_id: ''
      }
    }
  },

  methods: {
    doClose() {
      this.error = false
      this.$emit('close')
    },

    doSubmit() {
      // 講師登録
      this.createStudent({
        student: this.student
      })
        .then(() => {
          this.doClose()
          this.$toast.open({
            message: '生徒を登録しました. パスワードはログインIDと同じです.',
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
    ...mapActions('teachers/students', ['createStudent'])
  }
}
</script>
