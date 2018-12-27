<template>
  <section>
    <b-field label="ユーザーID">
      <b-input
        v-model="formData.login_id"
      />
    </b-field>
    <b-field label="パスワード">
      <b-input
        v-model="formData.password"
        type="password"
        password-reveal
      />
    </b-field>

    <TextField
      :value="formData.login_id"
      label="ユーザーID" />
    <Button
      text="ログイン"
      @click="onClick"
    />
  </section>
</template>

<script>
import Button from '~/components/common/atoms/Button'
import TextField from '~/components/common/atoms/TextField'

export default {
  components: {
    Button,
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
        login_id: 'aiueo',
        password: ''
      }
    }
  },
  methods: {
    onClick() {
      this.$emit('login', this.formData)
    }
  }
}
</script>

<style scoped>
</style>
