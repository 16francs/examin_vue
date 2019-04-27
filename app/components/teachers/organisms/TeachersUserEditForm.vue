<template>
  <div class="user-form">
    <div class="tile is-parent">
      <div class="title">ユーザー情報編集</div>
    </div>

    <div class="tile is-parent">
      <div class="tile is-child box">
        <the-alert
          :error="error"
          message="入力値に誤りがあります"
        />

        <teachers-user-form v-model="formData" />

        <teachers-submit-button @submit="doSubmit" />
      </div>
    </div>
  </div> 
</template>

<script>
import { mapGetters } from 'vuex'
import TeachersSubmitButton from '~/components/teachers/molecules/TeachersSubmitButton'
import TeachersUserForm from '~/components/teachers/molecules/TeachersUserForm'
import TheAlert from '~/components/common/atoms/TheAlert'

export default {
  components: {
    TeachersSubmitButton,
    TeachersUserForm,
    TheAlert
  },

  data() {
    return {
      error: false,
      formData: {
        name: '',
        school: '',
        login_id: ''
      }
    }
  },

  computed: {
    ...mapGetters(['user'])
  },

  mounted() {
    this.formData = {
      name: this.user.name,
      school: this.user.school,
      login_id: this.user.login_id
    }
  },

  methods: {
    doSubmit() {
      console.log('log:', 'update')
      console.log('log:', this.formData)
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
