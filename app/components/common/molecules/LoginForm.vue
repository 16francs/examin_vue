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
    <Button
      text="ログイン"
      @click="onClick(formData)"
    />
  </section>
</template>

<script>
import Button from '~/components/common/atoms/Button'
export default {
  name: 'LoginForm',
  components: { Button },
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
    onClick(formData) {
      this.$emit('login', formData)
    }
  }
}
</script>

<style scoped>
</style>
