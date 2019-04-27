<template>
  <div
    class="tile is-ancestor"
    data-test="user-edit"
  >
    <div class="tile is-vertical box">
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

            <div class="form">
              <h4 class="form-title">ユーザー情報</h4>

              <the-text-field
                v-model="formData.name"
                data-test="form-name"
                label="名前"
                placeholder="山田 太郎"
              />

              <the-text-field
                v-model="formData.school"
                data-test="form-school"
                label="学校名"
                placeholder="16francs"
              />

              <the-text-field
                v-model="formData.login_id"
                data-test="form-login-id"
                label="ログインID"
                placeholder="loginId"
              />
            </div>

            <teachers-submit-button @submit="doSubmit" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TeachersSubmitButton from '~/components/teachers/molecules/TeachersSubmitButton'
import TheTextField from '~/components/common/atoms/TheTextField'
import TheAlert from '~/components/common/atoms/TheAlert'

export default {
  components: {
    TeachersSubmitButton,
    TheAlert,
    TheTextField
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

<style scoped>
.form-title {
  text-align: center;
}
</style>
