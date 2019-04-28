<template>
  <the-modal
    :active="active"
    data-test="new-modal"
    submit="登録する"
    title="講師登録"
    @close="doClose"
    @submit="doSubmit"
  >
    <section class="modal-card-body">
      <the-alert
        :error="error"
        message="入力値に誤りがあります."
      />

      <teachers-user-form v-model="teacher" />
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
      teacher: {
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
      console.log('log:', 'create')
    },

    openAlert() {
      this.error = true
      setTimeout(() => {
        this.error = false
      }, 5000)
    }
  }
}
</script>
