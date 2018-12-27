<template>
  <b-icon
    :icon="icon"
    :size="size"
    :type="type"
  />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: 'home'
    },
    size: {
      type: String,
      default: 'is-medium'
    },
    type: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
</style>
