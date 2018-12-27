<template>
  <button
    :class="type"
    @click="onClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button is-primary'
    },
    text: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
</style>
