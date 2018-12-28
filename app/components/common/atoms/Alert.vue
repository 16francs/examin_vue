<template>
  <b-notification
    :active="error"
    type="is-danger"
    @close="close">
    {{ message }}
  </b-notification>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    message: {
      type: String,
      default: 'エラーが発生しました．'
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
</style>
