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
import { mapActions, mapGetters } from 'vuex'
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
      // ユーザー情報編集
      this.updateUser({
        user: this.formData
      })
        .then(() => {
          this.$router.push('/teachers')
          this.$toast.open({
            message: 'ユーザー情報を編集しました.',
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
    ...mapActions(['updateUser'])
  }
}
</script>

<style scoped>
.title {
  font-size: 5vh;
}
</style>
