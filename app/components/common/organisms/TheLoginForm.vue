<template>
  <section>
    <the-text-field
      v-model="formData.login_id"
      label="ユーザーID"
      data-test="login_id" />

    <the-text-field
      v-model="formData.password"
      label="パスワード"
      type="password"
      data-test="password" />

    <the-submit-button
      color="info"
      text="ログイン"
      @submit="doSubmit"
    />
  </section>
</template>

<script>
import TheTextField from '~/components/common/atoms/TheTextField'
import TheSubmitButton from '../molecules/TheSubmitButton'

export default {
  components: {
    TheSubmitButton,
    TheTextField
  },
  props: {
    error: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formData: {
        login_id: '',
        password: ''
      }
    }
  },
  methods: {
    doSubmit() {
      this.$emit('login', this.formData)
    }
  }
}
</script>
