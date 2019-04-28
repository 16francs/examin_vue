<template>
  <div class="form">
    <h4 class="form-title">ユーザー情報</h4>

    <the-text-field
      v-model="value.name"
      data-test="form-name"
      label="名前"
      placeholder="山田 太郎"
    />

    <the-text-field
      v-model="value.school"
      data-test="form-school"
      label="学校名"
      placeholder="16francs"
    />

    <the-text-field
      v-model="value.login_id"
      data-test="form-login-id"
      label="ログインID"
      placeholder="loginId"
    />
  </div>
</template>

<script>
import TheTextField from '~/components/common/atoms/TheTextField'

export default {
  components: {
    TheTextField
  },

  props: {
    value: {
      type: Object,
      default: () => {
        return {
          name: '',
          school: '',
          login_id: ''
        }
      }
    }
  }
}
</script>

<style scoped>
.form-title {
  text-align: center;
}
</style>
