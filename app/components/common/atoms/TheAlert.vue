<template>
  <b-notification
    :active="isError"
    :type="alertColor"
    @close="close">
    {{ message }}
  </b-notification>
</template>

<script>
export default {
  name: 'TheAlert',
  props: {
    error: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: 'danger'
    },
    message: {
      type: String,
      default: 'エラーが発生しました．'
    }
  },
  computed: {
    isError() {
      return this.error
    },
    alertColor() {
      return this.color === '' ? '' : `is-${this.color}`
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
