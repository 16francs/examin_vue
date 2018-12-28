<template>
  <section>
    <TextField
      v-model="formData.login_id"
      label="ユーザーID" />

    <TextField
      v-model="formData.password"
      label="パスワード"
      type="password" />
    <submit-button
      color="info"
      text="ログイン"
      @submit="doSubmit"
    />
  </section>
</template>

<script>
import TextField from '~/components/common/atoms/TextField'
import SubmitButton from '../molecules/SubmitButton'

export default {
  components: {
    SubmitButton,
    TextField
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
